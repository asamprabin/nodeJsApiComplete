const express = require('express');
const router = express.Router();
const jwtUtil = require('../utility/jwt');
const env = require('../environment');
const proposalModel = require('../model/proposalModel');
const supportOrOpposeModel = require('../model/supportOrOpposeModel');
const async = require("async");

// Getting user proposals
router.post('/getuserproposals', jwtUtil.verifyToken, (req,res) => {
    const userTrusting = req.body.userTrusting;
    const userLocation = req.body.userLocation;
    const skipProposals = req.body.skipProposals;
    const iraniyamEmailId = 'contact@iraniyam.com';

    proposalModel.find({
        $and: [
            { _id: { $nin: skipProposals }},
            {$or: [{ userId: userTrusting }, { location: userLocation }, { emailId: iraniyamEmailId }]}
        ]
    })
    .populate({
        path: 'reviews',
        select: 'owner body',
        populate: {
            path: 'owner',
            select: 'userName profileImage'
        },
        options: { limit: 2, sort: {createdAt: 1} }
    })
    .populate({
        path: 'owner',
        select: 'userName profileImage'
    })
    .select('title coverImage owner reviews createdAt')
    .sort({points: 1, createdAt: 1})
    .limit(10)
    .then(proposals => {
        if (proposals.length > 0) {
            env.apiResponse.success = true;
            env.apiResponse.payload = proposals;
            env.apiResponse.message = 'user proposals';
            res.status(200).json(env.apiResponse);
        } else {
            env.apiResponse.success = false;
            env.apiResponse.payload = proposals;
            env.apiResponse.message = 'noProposals';
            res.status(200).json(env.apiResponse);
        }
        
    })
    .catch(err => {
        env.apiResponse.success = false;
        env.apiResponse.message = 'Bad request';
        env.apiResponse.error = err;
        res.status(500).json(env.apiResponse);
        throw err;
    })

})

// Getting proposal details from proposal Id
router.get('/getProposalDetailsFromId/:proposalId', jwtUtil.verifyToken, (req, res) => {
    const proposalId = req.params.proposalId
    const userId = req.userId

    if (proposalId) {
        proposalModel.findById(proposalId)
        .populate({
            path: 'reviews',
            select: 'owner body',
            populate: {
                path: 'owner',
                select: 'userName profileImage'
            },
            options: { limit: 5, sort: {createdAt: 1} }
        })
        .populate({
            path: 'owner',
            select: 'userName profileImage'
        })
        .populate({
            path: 'location',
            select: 'district state'
        })
        .populate({
            path: 'supports',
            match: { user: userId },
            select: '_id'
        })
        .populate({
            path: 'opposes',
            match: { user: userId },
            select: '_id'
        })
        .select('title coverImage details supporters opposers fundsRequired owner reviews createdAt')
        .then(proposalDetails => {

            if (proposalDetails) {
                env.apiResponse.success = true;
                env.apiResponse.payload = proposalDetails;
                env.apiResponse.message = 'proposal details';
                res.status(200).json(env.apiResponse);
            } else if (!proposalDetails) {
                env.apiResponse.success = false;
                env.apiResponse.message = 'proposalNotFound';
                res.status(200).json(env.apiResponse);
            }
            
        })
        .catch(err => {
            env.apiResponse.success = false;
            env.apiResponse.message = 'Bad request';
            env.apiResponse.error = err;
            res.status(500).json(env.apiResponse);
        })
    } else {
        env.apiResponse.success = false;
        env.apiResponse.message = 'Bad request';
        env.apiResponse.error = err;
        res.status(401).json(env.apiResponse);
    }
    
})

// Publish new proposal
router.post('/publishProposal', jwtUtil.verifyToken, (req,res) => {
    const proposal = req.body.proposal;
    const userLocation = req.body.userLocation;
    const userId = req.userId;

    proposalModel.create({
        owner: userId,
        title: proposal.title,
        details: proposal.details,
        coverImage: proposal.coverImage,
        fundsRequired: proposal.fundsRequired,
        location: userLocation,
    })
    .then(publishedProposal => {
        proposalModel.findById(publishedProposal._id)
        .populate({
            path: 'reviews',
            select: 'length',
        })
        .populate({
            path: 'owner',
            select: 'userName profileImage'
        })
        .select('title coverImage owner createdAt')
        .then((proposal) => {
            if (proposal) {
                env.apiResponse.success = true;
                env.apiResponse.payload = proposal;
                env.apiResponse.message = 'proposal published successfully';
                res.status(200).json(env.apiResponse);
            } 
        })       
    })
    .catch(err => {
        env.apiResponse.success = false;
        env.apiResponse.message = 'Bad request';
        env.apiResponse.error = err;
        res.status(500).json(env.apiResponse);
    })

})

// Support or Oppose proposal
router.post('/supportOrOpposeProposal', jwtUtil.verifyToken, (req,res) => {

    const userId = req.userId
    const updateDetails = req.body;
    let points = 0

    if (updateDetails.userDistrict === updateDetails.proposalDistrict) points = 1;
    else if ((updateDetails.userDistrict !== updateDetails.proposalDistrict) && (updateDetails.userState === updateDetails.proposalState)) point = 2;
    else points = 3;

    async.parallel([
        // Adding Support
        (addingSupportDone) => {
            if (updateDetails.addSupport) {

                // Creating Support for proposal
                supportOrOpposeModel.create({
                    isSupport: true,
                    user: userId,
                    points: points
                })
                .then((support) => {

                    // Adding support in proposal
                    proposalModel.findByIdAndUpdate(updateDetails.proposalId, {$addToSet:{supports: support._id}, $inc: {points: points}})
                    .then((report) => addingSupportDone(null, support))
                    .catch((err) => addingSupportDone(err, null))
                })
                .catch((err) => addingSupportDone(err, null))

            } else addingSupportDone(null, null)
        },
        // Removing Support
        (removingSupportDone) => {
            if (updateDetails.removeSupport) {

                async.parallel([
                    // Remove support from support or oppose model
                    (removedSupport) => {
                        supportOrOpposeModel.findByIdAndDelete(updateDetails.supportOrOpposeId)
                        .then((report) => removedSupport(null, report))
                        .catch((err) => removedSupport(err, null))
                    },

                    // Remove support id from proposal supports
                    (removedSupportFromProposal) => {
                        // Removing support in proposal
                        proposalModel.findByIdAndUpdate(updateDetails.proposalId, {$pull:{supports: updateDetails.supportOrOpposeId}, $inc: {points: -points}})
                        .then((report) => removedSupportFromProposal(null, report))
                        .catch((err) => removedSupportFromProposal(err, null))
                    }
                ], (removeSupportError, removeSupportResults) => {
                    if (removeSupportError) removingSupportDone(removeSupportError, null)
                    else removingSupportDone(null, removeSupportResults)
                })

            } else removingSupportDone(null, null)
        },
        // Adding Oppose
        (addingOpposeDone) => {
            if (updateDetails.addOppose) {

                // Creating Oppose for proposal
                supportOrOpposeModel.create({
                    isOppose: true,
                    user: userId,
                    points: -points
                })
                .then((oppose) => {

                    // Adding support in proposal
                    proposalModel.findByIdAndUpdate(updateDetails.proposalId, {$addToSet:{opposes: oppose._id}, $inc: {points: -points}})
                    .then((report) => addingOpposeDone(null, oppose))
                    .catch((err) => addingOpposeDone(err, null))
                })
                .catch((err) => addingOpposeDone(err, null))
            } else addingOpposeDone(null, null)
        },
        // Removing Oppose
        (removingOpposeDone) => {
            if (updateDetails.removeOppose) {

                async.parallel([
                    // Remove support from support or oppose model
                    (removedOppose) => {
                        supportOrOpposeModel.findByIdAndDelete(updateDetails.supportOrOpposeId)
                        .then((report) => removedOppose(null, report))
                        .catch((err) => removedOppose(err, null))
                    },

                    // Remove support id from proposal supports
                    (removedOpposeFromProposal) => {
                        // Removing support in proposal
                        proposalModel.findByIdAndUpdate(updateDetails.proposalId, {$pull:{opposes: updateDetails.supportOrOpposeId}, $inc: {points: points}})
                        .then((report) => removedOpposeFromProposal(null, report))
                        .catch((err) => removedOpposeFromProposal(err, null))
                    }
                ], (removeSupportError, removeSupportResults) => {
                    if (removeSupportError) removingOpposeDone(removeSupportError, null)
                    else removingOpposeDone(null, removeSupportResults)
                })
            } else removingOpposeDone(null, null)
        }
    ], (err, results) => {
        if (err) {
            env.apiResponse.success = false;
            env.apiResponse.message = 'Bad request';
            env.apiResponse.error = err;
            res.status(500).json(env.apiResponse);
        } else {
            const updateStatus = {
                isSupporting: updateDetails.addSupport,
                isOpposing: updateDetails.addOppose,
                support: updateDetails.addSupport ? [results[0]] : [],
                oppose: updateDetails.addOppose ? [results[2]] : null
            }
            env.apiResponse.success = true;
            env.apiResponse.payload = updateStatus;
            env.apiResponse.message = 'support or oppose updated successfully';
            res.status(200).json(env.apiResponse);
        }
    })

})

// Getting User Latest Proposal
router.get('/getUserLatestProposal', jwtUtil.verifyToken, (req,res) => {
    const userId = req.userId;
    
    proposalModel.findOne({
        owner: userId
    })
    .select('coverImage reviews fundsRequired')
    .sort({createdAt: -1})
    .then(proposal => {
        if (proposal) {
            env.apiResponse.success = true;
            env.apiResponse.payload = proposal;
            env.apiResponse.message = 'user latest proposal';
            res.status(200).json(env.apiResponse);
        }        
    })
    .catch(err => {
        env.apiResponse.success = false;
        env.apiResponse.message = 'Bad request';
        env.apiResponse.error = err;
        res.status(500).json(env.apiResponse);
    })
})

module.exports = router
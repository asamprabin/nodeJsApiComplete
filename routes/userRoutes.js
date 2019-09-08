"use strict";
const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel');
const alertModel = require('../model/alertModel');
const reviewModel = require('../model/reviewModel')
// const newUserRegisterModel = require('../model/newRegisterUser');
const jwtUtil = require('../utility/jwt');
const env = require('../environment');
const bcryptUtil = require('../utility/becryptutils');
const otpUtils = require('../utility/otpUtils');
const mailUtils = require('../utility/mailUtils');

// Accessing user details from token
router.get('/getUserdetailsfromtoken', jwtUtil.verifyTemporaryToken, (req, res) => {
    const userId = req.userId

    userModel.findOne({ '_id': userId })
    .populate({
        path: 'location',
        select: '_id district state'})
    .then(details => {
        if (details) {
            const token = jwtUtil.createToken('30d', details._id)
            env.apiResponse.success = true;
            env.apiResponse.payload = { userDetails: details, token: token };
            env.apiResponse.message = 'user details';
            res.status(200).json(env.apiResponse);
        }
        else if (!details) {
            env.apiResponse.success = false;
            env.apiResponse.message = 'user not found';
            res.status(401).json(env.apiResponse);
        }
    })
    .catch(err => {
        env.apiResponse.success = false;
        env.apiResponse.message = 'Bad request';
        env.apiResponse.error = err;
        res.status(401).json(env.apiResponse);
    })
})

// Getting user details from username
router.get('/getuserdetailsfromusername/:userName', jwtUtil.verifyToken, (req, res) => {
    const userName = req.params.userName

    if (userName) {
        userModel.findOne({userName: userName, active: true})
        .select('_id userName profileImage about trusting trustedBy proposals')
        .populate({
            path: 'proposals',
            select: 'title coverImage owner reviews createdAt',
            options: { limit: 12, sort: {createdAt: -1} },
        })
        .then(userDetails => {

            if (userDetails) {
                env.apiResponse.success = true;
                env.apiResponse.payload = userDetails;
                env.apiResponse.message = 'user details';
                res.status(200).json(env.apiResponse);
            } else if (!userDetails) {
                env.apiResponse.success = false;
                env.apiResponse.message = 'userNotFound';
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

// Getting user news
router.get('/getusernews', jwtUtil.verifyToken, (req, res) => {
    alertModel.find()
    .then(news => {
        env.apiResponse.success = true;
        env.apiResponse.payload = news;
        env.apiResponse.message = 'user news';
        res.status(200).json(env.apiResponse);
    })
    .catch(err => {
        env.apiResponse.success = false;
        env.apiResponse.message = 'Bad request';
        env.apiResponse.error = err;
        res.status(500).json(env.apiResponse);
    })
})

// Getting user suggestions
router.post('/getusersuggestions', jwtUtil.verifyToken, (req, res) => {

    const skipUserSuggestionsIdsList = req.body.skipUserSuggestionsIdsList;
    const limit = req.body.limit;

    userModel.find()
    .select('userName profileImage')
    .limit(limit)
    .then((users) => {
        if (users.length > 0) {
            env.apiResponse.success = true;
            env.apiResponse.payload = users;
            env.apiResponse.message = 'user suggestions';
            res.status(200).json(env.apiResponse);
        } else {
            env.apiResponse.success = false;
            env.apiResponse.payload = proposals;
            env.apiResponse.message = 'noSuggestions';
            res.status(200).json(env.apiResponse);
        }
    })
})

// Adding user news
router.get('/addusernews', (req, res) => {
    alertModel.create({
        linkTitle: 'Add your account details',
        link: '/add/account',
        body: 'adding account details will help you'
    })
    .then((news) => {
        env.apiResponse.success = true;
        env.apiResponse.payload = news;
        env.apiResponse.message = 'user news created';
        res.status(200).json(env.apiResponse);
    })
    .catch(err => {
        env.apiResponse.success = false;
        env.apiResponse.message = 'Bad request';
        env.apiResponse.error = err;
        res.status(500).json(env.apiResponse);
    })
})

// Updating user location during registration
router.post('/registeruser', jwtUtil.verifyToken, (req, res) => {

    const userId = req.userId;
    const userName = req.body.userName;
    const location = req.body.location;

    userModel.findOne({ userName: userName })
    .then((user) => {
        if (!user) {
            userModel.updateOne({"_id" : userId}, 
            {$set:{'userName': userName, 'location' : location, 'registered': true, 'active': true}})
            .then(() => {
                env.apiResponse.success = true;
                env.apiResponse.message = 'User Successfuly Registered';
                res.status(200).json(env.apiResponse)
            })
            .catch(err => {
                env.apiResponse.success = false;
                env.apiResponse.message = "Something went wrong";
                env.apiResponse.error = err;
                res.status(500).json(env.apiResponse)
            });
        } else if (user) {
            env.apiResponse.success = false;
            env.apiResponse.message = 'userNameReserved';
            res.status(500).json(env.apiResponse)
        }
    })
    .catch(err => {
        env.apiResponse.success = false;
        env.apiResponse.message = "Something went wrong";
        env.apiResponse.error = err;
        res.status(500).json(env.apiResponse)
    })

    
});

//Register new user
router.post('/registernewuser', (req, res) => {
    const userName = req.body.userName;
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
    const location = req.body.location;

    userModel.findOne({ $or :[{ userName: userName }, { emailId: userEmail }]})
    .then((userDetails) => {
        if (userDetails) {
            if (userDetails.userName === userName) {
                env.apiResponse.success = false;
                env.apiResponse.message = 'User Name already found, try another user name';
                res.status(401).json(env.apiResponse)
            }
            else if (userDetails.emailId === userEmail) {
                env.apiResponse.success = false;
                env.apiResponse.message = 'User Email Already Found';
                res.status(401).json(env.apiResponse)
            }
        }
        else {
            var passwordHash = bcryptUtil.createHash(userPassword, 10);
            userModel.create({
                userName: userName,
                location: location,
                password: passwordHash,
                emailId: userEmail,
                registered: true,
                active: false,
                provider: 'iraniyam',
                createdAt: env.currentUTC
            })
            .then((user) => {
                if (user) {
                    const token = jwtUtil.createToken('365d', user._id);
                    mailUtils.triggerAccountVerificationMail(userEmail, token)
                    .then(() => {
                        env.apiResponse.success = true;
                        env.apiResponse.message = 'Successfully registered,Need to Activate your account';
                        res.status(200).json(env.apiResponse)
                    })
                    .catch(err => {
                        userModel.deleteOne({_id: user._id})
                        .then(() => {
                            env.apiResponse.success = false;
                            env.apiResponse.message = "Account Creation Failed, Kindly Verify your Email";
                            env.apiResponse.error = err;
                            res.status(500).json(env.apiResponse)
                        })
                        .catch(() => {
                            env.apiResponse.success = false;
                            env.apiResponse.message = "Account Creation Failed, Kindly Verify your Email";
                            env.apiResponse.error = err;
                            res.status(500).json(env.apiResponse)
                        })
                    })
                    
                }
                else {
                    env.apiResponse.success = false;
                    env.apiResponse.message = "Something went wrong !";
                    res.status(500).json(env.apiResponse)
                }
            })
            .catch(err => {
                env.apiResponse.success = false;
                env.apiResponse.message = "Something went wrong";
                env.apiResponse.error = err;
                res.status(500).json(env.apiResponse)
                throw err
            });
        }
    })
    .catch(err => {
        env.apiResponse.success = false;
        env.apiResponse.message = "Something went wrong";
        env.apiResponse.error = err;
        res.status(500).json(env.apiResponse)
    });

});

//Account Activation
router.post('/accountActivation', jwtUtil.verifyRegToken, (req, res) => {
    userModel.findOne({ "_id": req.userId })
    .then((userDetails) => {
        if (!userDetails) {
            env.apiResponse.success = false;
            env.apiResponse.message = 'User Not Found';
            res.status(401).json(env.apiResponse)
        }
        else if (userDetails && userDetails.active == false) {
            userModel.updateOne({ _id: req.userId }, { active: true } )
                .then(() => {
                    env.apiResponse.success = true;
                    env.apiResponse.message = 'Your Account is Activated';
                    res.status(200).json(env.apiResponse)
                })
                .catch(err => {
                    env.apiResponse.success = false;
                    env.apiResponse.message = err;
                    env.apiResponse.error = err;
                    res.status(500).json(env.apiResponse)
                });
        }  else if (userDetails && userDetails.active == true) {
            env.apiResponse.success = false;
            env.apiResponse.message = 'User already Registered';
            res.status(401).json(env.apiResponse)
        }
    })
    .catch(err => {
        env.apiResponse.success = false;
        env.apiResponse.message = err;
        env.apiResponse.error = err;
        res.status(500).json(env.apiResponse)
    });

});

//login user
router.post('/getUserLoginDetails', (req, res) => {

    const userEmail = req.body.userEmail;
    
    userModel.findOne({ emailId: userEmail })
    .then((userDetails) => {
        if (!userDetails) {
            env.apiResponse.success = false;
            env.apiResponse.message = 'User Not Found';
            res.status(401).json(env.apiResponse)
        } else if (userDetails && userDetails.active == true) {
            var checkValue = bcryptUtil.checkHash(req.body.password, userDetails.password);

            // If login Successful
            if (checkValue == true) {
                const token = jwtUtil.createToken('30d', userDetails._id)
                env.apiResponse.payload = token;
                env.apiResponse.success = true;
                env.apiResponse.message = 'Login Successfully';
                res.status(200).json(env.apiResponse)
            } else {
                env.apiResponse.success = false;
                env.apiResponse.message = 'Incorrect Password';
                res.status(401).json(env.apiResponse)
            }
        } else if (userDetails && userDetails.active == false) {
            env.apiResponse.success = false;
            env.apiResponse.message = 'Activate your account .';
            res.status(401).json(env.apiResponse)
        }
    })
    .catch(err => {
        env.apiResponse.success = false;
        env.apiResponse.message = err;
        env.apiResponse.error = 'Something went wrong';
        res.status(500).json(env.apiResponse)
    })
});

//resetpassword
router.post('/resetpassword', (req, res) => {
    userModel.findOne({ 'emailId': req.body.email })
        .then((userDetails) => {
            if (!userDetails) {
                env.apiResponse.success = false;
                env.apiResponse.message = "Email is Not Found,Please Register";
                res.status(401).json(env.apiResponse)
            }
            else {
                if(userDetails.provider!="Iraniyam"){
                    env.apiResponse.success = false;
                    env.apiResponse.message = "Please change your password using your provider "+userDetails.provider;
                    res.status(401).json(env.apiResponse)
                }
                else{
                const token = otpUtils.generateOTP();
                userModel.updateOne({ 'emailId': req.body.email }, { $set: { 'otp': token[1] } })
                    .then((userdetails) => {
                        if (userdetails) {
                            try {
                                triggerMail(req.body.email, token[0]);
                                env.apiResponse.success = true;
                                env.apiResponse.message = "OTP send to your Email and valid for 10 mints";
                                res.status(200).json(env.apiResponse)
                            }
                            catch (err) {
                                console.log(err);
                                env.apiResponse.success = false;
                                env.apiResponse.message = "Cannot send OTP,please try again sometime";
                                res.status(401).json(env.apiResponse)
                            }
                        }
                        else {
                            env.apiResponse.success = false;
                            env.apiResponse.message = "User Not Found";
                            res.status(401).json(env.apiResponse)
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        env.apiResponse.success = false;
                        env.apiResponse.message = "Something went wrong,Please contact admin !";
                        res.status(500).json(env.apiResponse)
                    })
            }
        }
        })
        .catch(err => {
            console.log(err);
            env.apiResponse.success = false;
            env.apiResponse.message = "Something went wrong,please contact admin";
            env.apiResponse.error = err;
            res.status(500).json(env.apiResponse)
        })
});

// verify otp
router.post('/verifyotp', (req, res) => {
    userModel.findOne({ 'emailId': req.body.userEmail })
        .then((userDetails) => {
            if (userDetails) {
                var isValid = otpUtils.verifyOTP(req.body.userOtp, userDetails.otp);
                if (isValid === true) {
                    try {
                        userModel.updateOne({ 'emailId': req.body.userEmail }, { $set: { 'otp': '' } })
                            .then((userdetails) => {
                                if (!userdetails) {
                                    env.apiResponse.success = false;
                                    env.apiResponse.message = 'Something Went Wrong,Please try again';
                                    res.status(500).json(env.apiResponse)
                                }
                                else if (userdetails) {
                                    env.apiResponse.success = true;
                                    env.apiResponse.message = 'OTP is verified';
                                    res.status(200).json(env.apiResponse)
                                }
                            })
                            .catch(err => {
                                console.log(err);
                                env.apiResponse.success = false;
                                env.apiResponse.message = 'Something Went Wrong,Please Contact Admin';
                                env.apiResponse.error = err;
                                res.status(401).json(env.apiResponse);
                            })
                    }
                    catch (err) {
                        console.log(err);
                        env.apiResponse.success = false;
                        env.apiResponse.message = 'Something Went Wrong,Please Contact Admin';
                        env.apiResponse.error = err;
                        res.status(401).json(env.apiResponse);
                    }
                }
                else if (isValid === false) {
                    env.apiResponse.success = false;
                    env.apiResponse.message = 'Your OTP is invalid';
                    res.status(401).json(env.apiResponse)
                }
                else {
                    env.apiResponse.success = false;
                    env.apiResponse.message = 'Something Went Wrong,Please Contact Admin';
                    res.status(401).json(env.apiResponse);
                }
            }
            else if (!userDetails) {
                env.apiResponse.success = false;
                env.apiResponse.message = 'User Not Found';
                res.status(401).json(env.apiResponse);
            }
        })
        .catch(err => {
            console.log(err);
            env.apiResponse.success = false;
            env.apiResponse.message = 'Something Went Wrong,Please Contact Admin';
            env.apiResponse.error = err;
            res.status(401).json(env.apiResponse);
        })
});

//password reset
router.post('/submitpassword', (req, res) => {
    userModel.findOne({ 'emailId': req.body.email })
        .then((userDetails) => {
            if (userDetails) {
                var hash = bcryptUtil.createHash(req.body.password, 10);
                try {
                    userModel.updateOne({ 'emailId': req.body.email }, { $set: { 'password': hash } })
                        .then((userdetails) => {
                            try {
                                if (!userdetails) {
                                    env.apiResponse.success = false;
                                    env.apiResponse.message = "Couldn't update your password,Try again sometime";
                                    env.apiResponse.error = err;
                                    res.status(401).json(env.apiResponse);
                                }
                                else if (userdetails) {
                                    env.apiResponse.success = true;
                                    env.apiResponse.message = 'Your Password Updated Successfully';
                                    res.status(200).json(env.apiResponse);
                                }
                            }
                            catch (err) {
                                console.log(err);
                                env.apiResponse.success = false;
                                env.apiResponse.message = 'Something Went Wrong,Please Contact Admin';
                                env.apiResponse.error = err;
                                res.status(401).json(env.apiResponse);
                            }

                        })
                        .catch(err => {
                            console.log(err);
                            env.apiResponse.success = false;
                            env.apiResponse.message = 'Something Went Wrong,Please Contact Admin';
                            env.apiResponse.error = err;
                            res.status(401).json(env.apiResponse);
                        })
                }
                catch (err) {
                    console.log(err);
                    env.apiResponse.success = false;
                    env.apiResponse.message = 'Something Went Wrong,Please Contact Admin';
                    env.apiResponse.error = err;
                    res.status(401).json(env.apiResponse);
                }
            }
            else if (!userDetails) {
                env.apiResponse.success = false;
                env.apiResponse.message = 'User Not Found';
                res.status(401).json(env.apiResponse);
            }
        })
        .catch(err => {
            console.log(err);
            env.apiResponse.success = false;
            env.apiResponse.message = 'Something Went Wrong,Please Contact Admin';
            env.apiResponse.error = err;
            res.status(401).json(env.apiResponse);
        })
});

module.exports = router
const express = require('express')
const router = express.Router()
const env = require('../environment');

const iraniyamStepsModel = require('../model/iraniyamStepsModel');
const locationModel = require('../model/locationModel');

// Getting Iraniyam Steps List
router.get('/getIraniyamStepsList', (req,res) => {
    iraniyamStepsModel.find()
    .then(steps => {
        env.apiResponse.success = true;
        env.apiResponse.payload = steps;
        env.apiResponse.message = 'locations list';
        res.status(200).json(env.apiResponse);
    })
    .catch(err => {
        env.apiResponse.success = false;
        env.apiResponse.message = 'Bad request';
        env.apiResponse.error = err;
        res.status(500).json(env.apiResponse);
    })
})

// Getting Location List
router.get('/getlocationlist', (req,res) => {

    locationModel.find()
    .select('_id state stateCode district districtCode country countryCode')
    .then(locations => {
        env.apiResponse.success = true;
        env.apiResponse.payload = locations;
        env.apiResponse.message = 'locations list';
        res.status(200).json(env.apiResponse);
    })
    .catch(err => {
        env.apiResponse.success = false;
        env.apiResponse.message = 'Bad request';
        env.apiResponse.error = err;
        res.status(500).json(env.apiResponse);
    })
})

module.exports = router
const jwt = require('jsonwebtoken');
const env = require('../environment')

function createToken(expiry, userId) {
    const token = jwt.sign({ userId: userId }, env.jwtKey, {
        expiresIn: expiry // 30, '2d', 10h
    });
    return token
}

function verifyTemporaryToken(req, res, next) {

    try {
        const tokenData = jwt.verify(req.headers['authorization'], env.jwtKey);
        if (req.headers['accept'] === 'true') {
            req.userId = tokenData.userId;
            next()
        } else {
            env.apiResponse.success = false;
            env.apiResponse.message = 'Invalid Token authorization'
            return res.status(401).json(env.apiResponse)
        }
    }
    catch (err) {
        env.apiResponse.success = false;
        env.apiResponse.message = 'Invalid Token'
        env.apiResponse.error = err
        return res.status(401).json(env.apiResponse)
    }
}

function verifyToken(req, res, next) {

    try {
        const tokenData = jwt.verify(req.headers['authorization'], env.jwtKey);
        if (req.headers['keyid'] === tokenData.userId) {
            req.userId = tokenData.userId;
            next()
        } else {
            env.apiResponse.success = false;
            env.apiResponse.message = 'Invalid Token authorization'
            return res.status(401).json(env.apiResponse)
        }
    }
    catch (err) {
        env.apiResponse.success = false;
        env.apiResponse.message = 'Invalid Token'
        env.apiResponse.error = err
        return res.status(401).json(env.apiResponse)
    }
}

function verifyRegToken(req, res, next) {
    try {
        const tokenData = jwt.verify(req.body.token, env.jwtKey);
        req.userId = tokenData.userId;
        next()
    }
    catch (err) {
        env.apiResponse.success = false;
        env.apiResponse.message = 'Invalid Verification Link'
        env.apiResponse.error = err
        return res.status(401).json(env.apiResponse)
    }
}

const jwtUtil = {
    createToken,
    verifyTemporaryToken,
    verifyToken,
    verifyRegToken
}

module.exports = jwtUtil
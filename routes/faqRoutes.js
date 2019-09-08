const express = require('express')
const router = express.Router()

const faqModel = require('../model/faqModel')

// Adding Faq Question and Answer
router.post('/addfaq', (req,res) => {
    
    faqModel.create({
        category: req.body.category,
        question: req.body.question,
        answer: req.body.answer
    })
    .then(() => {
        res.json({
            success: true,
            message: 'faq success created'
        })
    })
    .catch((err) => {
        res.status(500).json({
            success: false,
            message: err
        })
    })

})

module.exports = router
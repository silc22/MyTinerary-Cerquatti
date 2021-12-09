const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
        userName: joi.string().max(12).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'El usuario debe contener mas de 3 caracteres'
        }),
        password: joi.string().required().trim().min(8).max(20).messages()
    })

    const validation = schema.validate(req.body, {abortEarly:false})

    if (validation.error) {
        console.log(validation.error)
        return res.json({success: false, response:validation.error.details})
    }
    
    next()
    
    
}

module.exports = validator
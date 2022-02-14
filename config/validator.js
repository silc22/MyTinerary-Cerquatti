const joi = require("joi")

const validator = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().trim().min(2).required().messages({
            "string.empty": "You must complete the field", 
            "string.min": "Your name must be at least 2 characters long"
        }),
        lastName: joi.string().trim().min(2).required().messages({
            "string.empty": "You must complete the field", 
            "string.min": "Your last name must be at least 2 characters long"
        }), 
        country: joi.string().trim().min(2).required().messages({
            "string.empty": "You must complete the field", 
        }),
        password: joi.string().trim().min(6).max(25).required().messages({
            "string.empty": "You must complete the field password",
            "string.min": "Your name must be at least 6 characters long",
            "string.max": "Your name must be at least 25 characters long"
        }),
        url: joi.string().required().messages({
            "string.empty": "You must complete the url"
        }),
        email: joi.string().email().min(3).required(),
            "string.min": "Your email must have at least 3 characters",
            "string.max": "You must write a valid email adress",
        google: joi.boolean(), 
    })
    const validation = schema.validate(req.body, {abortEarly: false})
    if (!validation.error) {
        next()
    }
    else {
        res.json({success: false, errors: validation.error.details})
    }
}

module.exports = validator
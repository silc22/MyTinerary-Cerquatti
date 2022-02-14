const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')

module.exports = passport.use(
    new jwtStrategy(
        {
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "cohort24"
    // no encuentra el .env donde esta la secret key
    },
    (jwt_payload,done)=>{
    User.findOne({_id:jwt_payload._doc._id})
    .then(persona => {
        if (persona) {
            return done(null, persona)
        }else{
            return done(null, false)
        }
    })
    .catch(err => {
        console.log(err)
        return done(err,false)
    })
}))
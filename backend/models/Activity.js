const mongoose = require("mongoose")

const activitySchema = new mongoose.Schema ({
    activityTitle: {type: String, required: true},
    description: {type: String, required: true},
    src: {type: String, required: true},
    itineraryId: {type: mongoose.Types.ObjectId, ref: "itinerary", required: true},
})

const Activity = mongoose.model("activity", activitySchema)

module.exports = Activity
(function main($mongoose) {

    "use strict";

    const schema = new $mongoose.Schema({
        lastKnownPosition     : { type: String, required: true },
        lastCommunicationTime : { type: Date, required: true }

    });

    exports.EcoAssessment = $mongoose.model('RoverPosition', schema);

})(require('../mongo').Mongoose);
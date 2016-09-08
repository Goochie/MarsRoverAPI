(function main($mongoose, $process) {

    "use strict";

    $mongoose.connect($process.env.MARS_ROVER || 'mongodb://localhost/marsRover');
    const database = $mongoose.connection;

    exports.Mongoose = $mongoose;
    exports.database = database;

})(require('mongoose'), process);
(function main($process) {

    "use strict";

    exports.server = {
         port: $process.env.PORT || 5001
    }

})(process);
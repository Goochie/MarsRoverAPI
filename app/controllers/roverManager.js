(function main($joi) {

    "use strict";

    exports.deployRover = {



        /**
         * @method handler
         * @param {Object} request
         * @param {Function} reply
         * @return {void}
         */
        handler: function(request, reply) {

            reply({success:true, message:'New rover added'})

        }

    };

    exports.moveLeft = {

        /**
         * @method handler
         * @param {Object} request
         * @param {Function} reply
         * @return {void}
         */
        handler: function(request, reply) {

            reply({success:true, message:'Rover moved left'})

        }

    };

    exports.moveRight = {

        /**
         * @method handler
         * @param {Object} request
         * @param {Function} reply
         * @return {void}
         */
        handler: function(request, reply) {

            reply({success:true, message:'Rover moved right'})

        }

    };

    exports.moveUp = {

        /**
         * @method handler
         * @param {Object} request
         * @param {Function} reply
         * @return {void}
         */
        handler: function(request, reply) {

            reply({success:true, message:'Rover moved up'})

        }

    };

    exports.moveDown = {

        /**
         * @method handler
         * @param {Object} request
         * @param {Function} reply
         * @return {void}
         */
        handler: function(request, reply) {

            reply({success:true, message:'Rover moved down'})

        }

    };



})(require('joi'));
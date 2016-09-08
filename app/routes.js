(function main() {

    "use strict";

    const RoverManager = require('./controllers/roverManager');

    exports.endpoints = [
        { method: 'GET',   path: '/addRover',   config: RoverManager.deployRover },
        { method: 'GET',   path: '/moveLeft',   config: RoverManager.moveLeft },
        { method: 'GET',   path: '/moveRight',  config: RoverManager.moveRight },
        { method: 'GET',   path: '/moveUp',     config: RoverManager.moveUp },
        { method: 'GET',   path: '/moveDown',   config: RoverManager.moveDown }
    ];

})();
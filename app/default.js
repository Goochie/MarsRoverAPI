(function main($hapi, $config, $routes, $process) {

    "use strict";

    const server = new $hapi.Server();

    // Begin listening on port defined in env var, otherwise default to 5000.
    server.connection({ port: $config.server.port, routes: { cors: { credentials: true } } });


    server.register(require('hapi-auth-cookie'), function() {

        server.auth.strategy('session', 'cookie', {
            password: $process.env.H2_COOKIESECRET || '^default*h2',
            cookie: 'sid',
            isSecure: false,
            ttl: 24 * 60 * 60 * 1000
        });

        server.route($routes.endpoints);

        console.log("Server started on localhost : Port : "+$config.server.port) ;
        server.start();

    });




})(require('hapi'), require('./config'), require('./routes'), process);
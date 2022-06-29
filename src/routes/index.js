const express = require('express');
const testRoute = require('./testRoute');

const router = express.Router();


const routesList = [
    {
        path : '/test',
        route : testRoute

    }
];

routesList.forEach((route) => {
    router.use(route.path , route.route)
});

module.exports = router;

const express = require('express');
function eRoutes() {
    const router = express.Router();
    var employee = require('./repository/employees/employeeRoutes')(router);
    return router;
}
module.exports = eRoutes;
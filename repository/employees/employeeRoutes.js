const _employeeRepository = require('./employeeRepository');
const dbContext = require('../../Database/dbContext');

module.exports = function (router) {
    const employeeRepository = _employeeRepository(dbContext);

    //Router simple
    router.route('/employees')
            .get(employeeRepository.getAll)
            .post(employeeRepository.post);

    //Router con parametros
    router.route('/employees/:employeeId')
            .get(employeeRepository.get);
}
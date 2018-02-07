const rutas = require('express');
const router = rutas();
const user = require('./user');
const login = require('./login');

router.use('/user', user);
router.use('/login', login);
module.exports = router;

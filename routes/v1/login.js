const rutas = require('express');
const router = rutas();
const login = require('../../middlewares/v1/login');

router.route('/')
.post(login.postOne);

router.route('/:id')
.post(login.postOne);

module.exports = router;

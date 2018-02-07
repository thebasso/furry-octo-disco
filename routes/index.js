const Route = require('express');
const router = Route();
const v1 = require('./v1');
const models = require('../models');

router.get('/',(req, res, next) =>{
  throw new Error('tester');
  res.json({
    message: 'Hola API'
  });
});

router.use('/v1', v1);

router.use(function onNotFound(req, res, next){
  res.status(404).json({
    error: {
      message: "No Encontrado (404)",
      code: 404
    }
  });
});

router.use(function onError(err, req, res, next){
  if (res.headersSent) return next(err);
res.status(500).json({
      error: {
        message: err.message,
        code:500
      }
  });
});


module.exports = router;

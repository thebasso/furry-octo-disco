const express = require('express');
const app = express();
const routes = require('./routes');
const models = require('./models');
const bodyParser = require('body-parser');


app.set('port', 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use((req, res, next) =>{
  res.header('SNUUPER', 'USUARIOS API');
  next();
});

app.use('/', routes);

models.sequelize.sync().then(() => {
  app.listen(app.get('port'), () =>{
    console.log(`Aplicacion Iniciada en puerto :${app.get('port')}`);
  });
})

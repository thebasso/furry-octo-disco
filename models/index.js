const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize('snuuper', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
     timestamps: false,
     createdAt: false,
     updatedAt: false,
     freezeTableName: true,
     tableName: 'MOCK_DATA',
    }
});

const db = {};

fs.readdirSync(__dirname)
.filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
.forEach((file) => {
  const model = sequelize.import(path.join(__dirname, file));

  db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName])
  db[modelName].associate(db);

  module.exports[modelName] = db[modelName];
});

exports.sequelize = sequelize;
exports.Sequelize = Sequelize;

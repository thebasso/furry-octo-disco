const models = require('../../models');
const User = models.User;

exports.getAll = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.json({users});
    })
    .catch(next);
}

exports.postOne = (req, res, next) => {
  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    Username: req.body.Username,
    password: req.body.password
  };(req, res, next)

  User.create(user)
    .then((user) => {
      res.json({user});
    })
    .catch(next);
}

exports.getOne = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      res.json({user});
    })
    .catch(next);
}

exports.putOne = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) return res.send('usuario no existe');

      user.first_name = req.body.first_name;
      user.last_name  = req.body.last_name;
      user.email      = req.body.email;
      user.Username   = req.body.Username;
      user.password   = req.body.password;

      return user.save()
        .then((user) => {
          res.json({user});
        })
        .catch(next);
    })
    .catch(next);
}

exports.deleteOne = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) return res.send('usuario no encontrado');

      return user.destroy()
        .then((user) => {
          res.json({user});
        })
        .catch(next);
    })
    .catch(next);
}

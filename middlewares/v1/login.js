const models = require('../../models');
const Login = models.login;
const config = require('../../config');
const jwt = require('jsonwebtoken');


exports.postOne = (req, res, next) => {
  Login.findById(req.params.id)
    .then((user) => {
        if (user.password != req.body.password) {
          res.json({ success: false, message: 'authentication failed. Wrong password'});
        } else {
            const token = jwt.sign({ id: user._id }, config.secret, {expiresIn: 86400} /*24 hrs*/);
            res.json({user, success: true, message: 'Enjoy your token', token: token });
          };
        })
          .catch(next);
    }

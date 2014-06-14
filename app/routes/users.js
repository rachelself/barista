'use strict';

// exports.lookup = (req, res, next)=>{
//   User.findByUserId(req.session.userId, u=>{
//     res.locals.user = u;
//     next();
//   });
// };

exports.register = (req, res)=>{
  res.render('users/register', {title: 'Arena Register Page'});
};

// exports.validate = (req, res)=>{
//   User.create(req.body, user=>{
//     if(user){
//       res.redirect('/');
//     }else{
//       res.redirect('/register');
//     }
//   });
// };

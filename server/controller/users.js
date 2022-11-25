// This controller exports the function displayUsersPage to users.js, where the route extension is given

module.exports.displayUsersPage = (req, res, next) => {
    res.render('users', { title: 'User Page' });
  };
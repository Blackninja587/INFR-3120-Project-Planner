// This controller exports the function displayHomePage to index.js, where the route extension is given

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Project Plan' });
  };
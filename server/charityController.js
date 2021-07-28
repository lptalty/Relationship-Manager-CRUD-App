const models = require('./charityModels');

const charityController = {};

/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/
charityController.getAllUsers = (req, res, next) => {
    console.log('get all users firing')
    models.Charity.find({}, (err, users) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err) return next(err);
    console.log('should be able to find users')
    console.log(users)
    // store retrieved users into res.locals and move on to next middleware
    res.locals.users =  users;
    // console.log(res.locals)
    return next();
  });
};

module.exports = charityController;

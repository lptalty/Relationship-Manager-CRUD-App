const models = require('./charityModels');

const charityController = {};

/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/
charityController.getAllUsers = (req, res, next) => {
    models.Charity.find({}, (err, users) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err) return next(err);
    // console.log('Finding users...')
    // console.log(users)
    // store retrieved users into res.locals and move on to next middleware
    res.locals.users =  users;
    // console.log(res.locals)
    return next();
  });
};

charityController.postNewFriend = async (req, res, next) => {
  
  try {
    console.log('We have entered charity controller post new friend')
    console.log(req.body)
    await models.Charity.create(req.body)
    return next()
  } catch (error) {
    console.log('there was an error creating the user')
    return next(error)
  }
};

charityController.deleteFriend = async (req, res, next) => {
  
  try {
    console.log('We have entered charity controller delete friend')
    await models.Charity.deleteOne(req.body)
    return next()
  } catch (error) {
    console.log('there was an error deleting the user')
    return next(error)
  }
};

charityController.findFriend = async (req, res, next) => {
  
  try {
    console.log('We have entered charity controller findFriend')
    // console.log(req.body)
    const key = 'friend' + req.body.key
    const value = req.body.value

    const search = {
      [key]: value
    }

    console.log('searching for')
    console.log(search)
    await models.Charity.find(search, (err, users) =>{
      if(err) return next(err)
      res.locals.users = users;
      console.log('users equals')
      console.log(users)
      return next()
    })
  } catch (error) {
    console.log('there was an error finding the user')
    return next(error)
  }
};

module.exports = charityController;

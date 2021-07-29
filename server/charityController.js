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
    // store retrieved users into res.locals and move on to next middleware
    res.locals.users =  users;
    return next();
  });
};

//saves new friend information to the database
charityController.postNewFriend = async (req, res, next) => {
  try {
    console.log('We have entered charity controller post new friend')
    await models.Charity.create(req.body)
    return next()
  } catch (error) {
    console.log('there was an error creating the user')
    return next(error)
  }
};

//deletes user from the database
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

//finds a friend or multiple friends based on the category (key) and the search data
charityController.findFriend = async (req, res, next) => {
  try {
    console.log('We have entered charity controller findFriend')
    const key = 'friend' + req.body.key
    const value = req.body.value

    const search = {
      [key]: value
    }
    
    //if the user makes a search request without any information, delete row and send empty object
    if (search['friend'] === ''){
      delete search['friend']
    }

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

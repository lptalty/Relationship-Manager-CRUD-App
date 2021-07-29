const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Liam:personalproject@cluster0.vqipd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log('MongoDB Connected')})
.catch(err => console.log(err))


const Schema = mongoose.Schema;

/*
I was originally going to do this project by saving and getting different
charities to render on the page for the user. I ended up refactoring this 
Schema to store the information of friends because the project took a turn.
This explains the oddly named schema.  
 */
const charitySchema = new Schema({
    friendName: {type: String, required: true, unique: true},
    friendBirthday: {type: String, required: false, unique: false},
    friendFavoriteColor: {type: String, required: false},
    friendFavoriteFood: {type: String, required: false},
    friendCurrentCity: {type: String, required: false}
})

const Charity = mongoose.model('charity', charitySchema);

module.exports = {Charity};
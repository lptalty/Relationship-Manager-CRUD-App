const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://Liam:personalproject@cluster0.vqipd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {console.log('MongoDB Connected')})
// .catch(err => console.log(err))


const Schema = mongoose.Schema;

const charitySchema = new Schema({
    _id: {type: mongoose.Types.ObjectId},
    website_url: {type: String, required: true, unique: true},
    website_name: {type: String, required: true}
})

const Charity = mongoose.model('charity', charitySchema);

module.exports = {Charity};
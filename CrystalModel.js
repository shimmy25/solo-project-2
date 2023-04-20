const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const MONGO_URI =
//   'mongodb+srv://shimmy25:SOMgMO61xyE72NJM@cluster0.hafhoi0.mongodb.net/?retryWrites=true&w=majority';

// mongoose
//   .connect(MONGO_URI, {
//     // options for the connect method to parse the URI
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // sets the name of the DB that our collections are part of
//     dbName: 'crystalSearcher',
//   })
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch((err) => console.log(err));

const crystalSchema = new Schema({
  rockName: { type: String, required: true },
  category: { type: String, required: true },
  color: { type: String, required: true },
  opacity: { type: String, required: true },
  qualities: { type: String, required: true },
  rainbowAura: { type: String, required: true },
});

module.exports = mongoose.model('Crystal', crystalSchema);

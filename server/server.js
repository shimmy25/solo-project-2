const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const CrystalController = require('../CrystalController');
const mongoURI = require('../mongoURI');
const PORT = 3000;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const crystalRouter = express.Router();
app.use('/', crystalRouter);

// // Create a crystal in the database
// // http://localhost:3000/crystal
// crystalRouter.post('/', CrystalController.createcrystal);

// // Get a crystal from the database
// // http://localhost:3000/crystal/"rockname"
// crystalRouter.get('/:rockName', CrystalController.getCrystalByName);

// // Get a crystal from the database
// // http://localhost:3000/crystal/"color"
// crystalRouter.get('/:color', CrystalController.getCrystalsByColor);

// // Get a crystal from the database
// // http://localhost:3000/crystal/"name"
// crystalRouter.get('/:rainbowAura', CrystalController.getCrystalByRainbow);

// // Change a crystals name
// // http://localhost:3000/crystal/"name"
// crystalRouter.patch('/:category', CrystalController.updateCrystalCategory);

// // Change a crystals name
// // http://localhost:3000/crystal/"name"
// crystalRouter.patch('/:quality', CrystalController.updateCrystalQuality);

// // Delete a crystal from the database
// // http://localhost:3000/crystal/"name"
// crystalRouter.delete('/:rockName', CrystalController.deleteCrystal);

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/

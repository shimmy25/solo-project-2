const Crystal = require('./CrystalModel');

const CrystalController = {};

CrystalController.createCrystal = (req, res) => {
  const { rockName, category, color, opacity, qualities, rainbowAura } =
    req.body;
  Crystal.create(
    {
      rockName: rockName,
      category: category,
      color: color,
      opacity: opacity,
      qualities: qualities,
      rainbowAura: rainbowAura,
    },
    function (err, successfulFind) {
      if (err) {
        return res.status(400).send({ message: 'All fields required' });
      }
      return res.status(201).send({ message: 'New crystal added' });
    }
  );
};

CrystalController.getCrystalByName = (req, res) => {
  const { rockName } = req.params;
  Crystal.findOne({ rockName: rockName }, (err, successfulFind) => {
    if (err)
      return res
        .status(400)
        .send({ message: 'Crystals with that name not found' });
    return res.status(200).send({ message: successfulFind });
  });
};

CrystalController.getCrystalsByColor = (req, res) => {
  const { color } = req.params;
  Crystal.find({ color: color }, (err, successfulFind) => {
    if (err)
      return res
        .status(400)
        .send({ message: 'Crystals with that color not found' });
    return res.status(200).send({ message: successfulFind });
  });
};

CrystalController.getCrystalByRainbow = (req, res) => {
  const { rainbowAura } = req.params;
  Crystal.find({ rainbowAura: rainbowAura }, (err, successfulFind) => {
    if (err)
      return res
        .status(400)
        .send({ message: 'Crystals with/without rainbowAura not found' });
    return res.status(200).send({ message: successfulFind });
  });
};

CrystalController.updateCrystalCategory = (req, res) => {
  const { category } = req.params;
  const newCrystalCategory = req.body.category;
  Crystal.findOneAndUpdate(
    { category: category },
    { category: newCrystalCategory },
    //NEED TO SPECIFY {new: true} options object to make sure doc obtained in callback is the updated object, not the found one.
    { new: true },
    (err, successfulFind) => {
      if (err)
        return res.status(400).send({
          message: 'Update unsuccessful. Confirm all fields are correct.',
        });
      return res
        .status(200)
        .send({ message: 'Update successful.', successfulFind });
    }
  );
};

CrystalController.updateCrystalQuality = (req, res) => {
  const { qualities } = req.params;
  const newCrystalqualities = req.body.qualities;
  Crystal.findOneAndUpdate(
    { qualities: qualities },
    { qualities: newCrystalqualities },
    //NEED TO SPECIFY {new: true} options object to make sure doc obtained in callback is the updated object, not the found one.
    { new: true },
    (err, successfulFind) => {
      if (err)
        return res.status(400).send({
          message: 'Update unsuccessful. Confirm all fields are correct.',
        });
      return res
        .status(200)
        .send({ message: 'Update successful.', successfulFind });
    }
  );
};

CrystalController.deleteCrystal = (req, res) => {
  const { rockName } = req.params;
  Crystal.findOneAndDelete({ rockName: rockName }, (err, successfulFind) => {
    if (err)
      return res
        .status(400)
        .send({ message: 'Unable to locate crystal to delete.' });
    return res
      .status(200)
      .send({ message: 'Deleted crystal: ', successfulFind });
  });
};

module.exports = CrystalController;

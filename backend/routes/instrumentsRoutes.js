const { Instrument } = require('../models/instrumentModel');
const { COMMON_ERROR_MESSAGE } = require('./../data/constants');
const router = require('express').Router();
const auth = require('../middlewares/authMiddleware');
const _ = require('lodash');

router.post('/', auth, async (req, res) => {
  let instrument = new Instrument({ ...req.body, userId: req.user._id });
  try {
    await instrument.save();
    return res.json(instrument);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const instruments = await Instrument.find({ userId: req.user._id });
    res.json(instruments);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

router.put('/', auth, async (req, res) => {
  try {
    const id = req.body._id;
    const instrument = await Instrument.findByIdAndUpdate(
      id,
      _.omit(req.body, '_id'),
      { new: true }
    );
    return res.json(instrument);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const id = req.params.id;
    await Instrument.findByIdAndDelete(id);
    return res.json(`Deleted Successfully ${id}`);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

module.exports = router;

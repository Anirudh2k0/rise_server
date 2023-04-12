const { Storage } = require('../models/storageModel');
const { COMMON_ERROR_MESSAGE } = require('../data/constants');
const router = require('express').Router();
const auth = require('../middlewares/authMiddleware');
const _ = require('lodash');

router.post('/', auth, async (req, res) => {
  let storage = new Storage({ ...req.body, userId: req.user._id });
  try {
    await storage.save();
    return res.json(storage);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const storages = await Storage.find({ userId: req.user._id });
    res.json(storages);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

router.put('/', auth, async (req, res) => {
  try {
    const id = req.body._id;
    const storage = await Storage.findByIdAndUpdate(
      id,
      _.omit(req.body, '_id'),
      { new: true }
    );
    return res.json(storage);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const id = req.params.id;
    await Storage.findByIdAndDelete(id);
    return res.json(`Deleted Successfully ${id}`);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

module.exports = router;

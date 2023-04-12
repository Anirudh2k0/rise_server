const { Project } = require('../models/projectModel');
const { COMMON_ERROR_MESSAGE } = require('../data/constants');
const router = require('express').Router();
const auth = require('../middlewares/authMiddleware');

const _ = require('lodash');

router.post('/', auth, async (req, res) => {
  let project = new Project({ ...req.body, userId: req.user._id });
  try {
    await project.save();
    return res.json(project);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.user._id });
    res.json(projects);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

router.put('/', auth, async (req, res) => {
  try {
    const id = req.body._id;
    const project = await Project.findByIdAndUpdate(
      id,
      _.omit(req.body, '_id'),
      { new: true }
    );
    return res.json(project);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const id = req.params.id;
    await Project.findByIdAndDelete(id);
    return res.json(`Deleted Successfully ${id}`);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

module.exports = router;

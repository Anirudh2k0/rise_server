const { Server } = require("../models/server");
const { COMMON_ERROR_MESSAGE } = require("../data/constants");
const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");

const _ = require("lodash");

router.post("/", auth, async (req, res) => {
  let server = new Server({ ...req.body, userId: req.user._id });
  try {
    await server.save();
    return res.json(server);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const servers = await Server.find({ userId: req.user._id });
    res.json(servers);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

router.put("/", auth, async (req, res) => {
  try {
    const id = req.body._id;
    const server = await Server.findByIdAndUpdate(id, _.omit(req.body, "_id"), {
      new: true,
    });
    return res.json(server);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const id = req.params.id;
    await Server.findByIdAndDelete(id);
    return res.json(`Deleted Successfully ${id}`);
  } catch (error) {
    return res.status(500).json(COMMON_ERROR_MESSAGE);
  }
});

module.exports = router;

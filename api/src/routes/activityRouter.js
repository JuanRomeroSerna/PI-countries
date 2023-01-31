const { Router } = require("express");

const { createActivityHandler, getAllActivitiesHandler, deleteActivityHandler } = require("../handlers/activityHandlers");

const activityRouter = Router();

const validate = (req, res, next) => {
  const { name, difficulty, duration, season, } = req.body;
  if (!name) return res.status(400).json({ error: "Missing name" });
  if (!difficulty) return res.status(400).json({ error: "Missing difficulty" });
  if (!duration) return res.status(400).json({ error: "Missing duration" });
  if (!season) return res.status(400).json({ error: "Missing season" });

  next();
};

activityRouter.get("/", getAllActivitiesHandler);

activityRouter.post("/", validate, createActivityHandler);

activityRouter.delete('/:id', deleteActivityHandler)


module.exports = activityRouter;




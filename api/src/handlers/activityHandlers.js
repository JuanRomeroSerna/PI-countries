const { createActivity, getAllActivities } = require('../controllers/activityController');


const getAllActivitiesHandler = async (req, res) => {
  try {
    const activities = await getAllActivities();
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createActivityHandler = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    const activity = await createActivity(name, difficulty, duration, season, countries);
    res.status(200).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = { createActivityHandler, getAllActivitiesHandler };
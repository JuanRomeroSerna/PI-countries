const { Activity, Country } = require("../db");


const getAllActivities = async () => {

  const allActivities = await Activity.findAll({
    include: Country,
  });
  if (allActivities.length === 0) throw Error("no activities found")

  return allActivities;
};


const createActivity = async (name, difficulty, duration, season, countries) => {

  const activity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  const countriesFound = await Country.findAll({
    where: {
      name: countries,
    },
  });

  await activity.addCountries(countriesFound);

  return activity;

};

const deleteActivity = async (id) => {
  const activity = await Activity.findByPk(id);
  if (!activity) throw Error("Activity not found");
  await activity.destroy();
};







module.exports = { createActivity, getAllActivities, deleteActivity };
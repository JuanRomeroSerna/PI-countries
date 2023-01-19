const { Activity, Country } = require("../db");
const { getAllCountries } = require("./countryController");



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

  const activity = await Activity.destroy({ where: { id } });
  if (activity > 0) {
    return 'Activity deleted'

  };
}







module.exports = { createActivity, getAllActivities, deleteActivity };
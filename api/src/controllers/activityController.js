const { Activity, Country } = require("../db");


const getAllActivities = async () => {

  const allActivities = await Activity.findAll({
    include: Country, //
  });
  if (allActivities.length === 0) throw Error("no activities found")

  return allActivities;
};



const createActivity = async (name, difficulty, duration, season, country) => {

  const activity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });


  const countriesAdd = await Country.findAll({
    where: {
      name: country,
    }
  })

  await activity.addCountries(countriesAdd);

  return activity;

};









module.exports = { createActivity, getAllActivities };
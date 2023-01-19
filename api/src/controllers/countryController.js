const axios = require("axios");
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize")

const baseCountries = (arr) =>
  arr.map((element) => {
    return {
      id: element.cca3,
      name: element.name.common,
      flag: element.flags[0],
      continent: element.continents[0],
      capital: element.capital ? element.capital[0] : "No capital available",
      subregion: element.subregion,
      area: element.area,
      population: element.population,
    };
  });

const getAllCountries = async () => {
  const apiCountriesRaw = (
    await axios.get("https://restcountries.com/v3/all")
  ).data;

  const apiCountries = baseCountries(apiCountriesRaw)

  const dbCountries = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  if (dbCountries.length === 0) Country.bulkCreate(apiCountries)


  return [...apiCountries, ...dbCountries];
};

const getCountryById = async (id) => {

  if (id.length < 3 || id.length > 3) { throw Error(`Invalid id ${id}, the serch must be with 3 characters`) };

  const country = await Country.findByPk(id, {
    include: Activity
  });

  return country;

};


const getCountryByName = async (name) => {

  const dbCountries = await Country.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
  });

  if (dbCountries.length === 0) { throw Error(`Country with the name ${name} not found`) }

  return dbCountries;
};


module.exports = {
  getAllCountries,
  getCountryByName,
  getCountryById,
};



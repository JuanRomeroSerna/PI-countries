const axios = require("axios");
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize")

const baseCountries = (arr) =>
  arr.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common,
      flag: country.flags[0],
      continent: country.continents[0],
      capital: country.capital ? country.capital[0] : "No capital available",
      subregion: country.subregion ? country.subregion : "No subregion available",
      area: country.area,
      population: country.population,
    };
  });

const getAllCountries = async () => {
  const apiCountriesRaw = (
    await axios.get("https://restcountries.com/v3/all")
  ).data;

  const apiCountries = await baseCountries(apiCountriesRaw)

  const dbCountries = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  if (dbCountries.length === 0) await Country.bulkCreate(apiCountries)


  return dbCountries
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

  // if (dbCountries.length === 0) { throw Error(`Country with the name ${name} not found`) }


  return dbCountries;
};


module.exports = {
  getAllCountries,
  getCountryByName,
  getCountryById,
};



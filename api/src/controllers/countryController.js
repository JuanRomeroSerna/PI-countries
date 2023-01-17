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
      capital: element.capital,
      subregion: element.subregion,
      area: element.area,
      population: element.population,
    };
  });

const getAllCountries = async () => {
  const dbCountries = await Country.findAll()

  const apiCountriesRaw = (
    await axios.get("https://restcountries.com/v3/all")
  ).data;

  const apiCountries = baseCountries(apiCountriesRaw)

  return [...dbCountries, ...apiCountries];
};

const getCountryById = async (id) => {
  const apiCountriesRaw = (
    await axios.get("https://restcountries.com/v3/all")
  ).data;

  const apiCountries = baseCountries(apiCountriesRaw)

  const filteredApi = apiCountries.filter(country => country.id.toLowerCase().includes(id.toLowerCase()));

  if (filteredApi.length === 0) { throw Error("Country not found") }

  const dbCountries = await Country.findByPk(id, {
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });

  return { ...filteredApi[0], ...dbCountries };

};


const getCountryByName = async (name) => {

  const apiCountriesRaw = (
    await axios.get("https://restcountries.com/v3/all")
  ).data;

  const apiCountries = baseCountries(apiCountriesRaw)

  const filteredApi = apiCountries.filter(country => country.name.toLowerCase().includes(name.toLowerCase()));

  if (filteredApi.length === 0) { throw Error("Country not found") }

  const dbCountries = await Country.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
  });

  return [...filteredApi, ...dbCountries];
};


module.exports = {
  getAllCountries,
  getCountryByName,
  getCountryById,
};
const { Router } = require("express");

const {
  getCountryHandler,
  getCountriesHandler,
} = require("../handlers/countryHandlers");

const countryRouter = Router();


countryRouter.get("/", getCountriesHandler);

countryRouter.get("/:id", getCountryHandler);



module.exports = countryRouter;

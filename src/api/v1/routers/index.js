
const Router = require('express').Router();

const CountriesController = require('../controllers/CountriesController')

Router.get('/',CountriesController().fetchCountries); //fetch the country and state and cites,by the req.query

module.exports = Router
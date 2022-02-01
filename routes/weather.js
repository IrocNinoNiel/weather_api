const router = require("express").Router();

const { ShowWeatherByCity } = require("../utils/WeatherController");

// Get the Weather of a particular country
router.post("/show",async (req, res) => {
    await ShowWeatherByCity(req, res);
});


module.exports = router;
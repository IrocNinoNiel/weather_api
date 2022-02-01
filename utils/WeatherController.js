const axios = require('axios');
const { API } = require("../config");

const ShowWeatherByCity = async (req, res) => {
    try{

        const { city_name } = req.body;

        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API}`);
  
        res.json({
            weather: response.data,
            succes: true
        });

    } catch(error){
        console.log(error);
        return res.status(500).json({
            message: error.message,
            success: false
        });
    }
}

module.exports = {
    ShowWeatherByCity
}
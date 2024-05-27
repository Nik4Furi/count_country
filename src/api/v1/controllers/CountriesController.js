
const countriesData = require('../utils/countries')


function CountriesControllers() {

    //----------------- Function to check space is exist

    function capitalizeEachWord(str) {
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    



    return {

        async fetchCountries(req, res) {
            try {
                let { country, state } = req.query;

                //make first letter capitcal
                if (country) {
                    country = capitalizeEachWord(country);
                }
                if (state) {
                    state = capitalizeEachWord(state);
                }

                if (country && state) {
                    const cities = await countriesData[country][state];
                    if (!cities) return res.status(404).json({ success: false, message: "Given country and states's cities not found" })

                    return res.status(201).json({ success: true, message: "Fetch the cities successfully", length: cities?.length, cities })
                }
                else if (country) {
                    const data = countriesData[country];
                    let states = [];

                    if (data)
                        states = await Object.keys(data);

                    if (!data || !states) return res.status(404).json({ success: false, message: "Given country's states not found" })

                    return res.status(201).json({ success: true, message: "Fetch the states successfully", length: states?.length, states })

                }
                const countries = await Object.keys(countriesData);
                if (!countries) return res.status(404).json({ success: false, message: "Countries not found" })

                return res.status(201).json({ success: true, message: "Fetch the countries successfully", length: countries?.length, countries })


            } catch (error) { return res.status(500).json({ success: false, message: error?.message }) }
        }
    }
}

module.exports = CountriesControllers;
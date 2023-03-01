
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
  params: {location: 'London'},
  headers: {
    'X-RapidAPI-Key': 'ff4cad4e96mshab107300ace4f89p180fd6jsnd5f387370d58',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
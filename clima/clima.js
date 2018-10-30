
const axios = require('axios');

const getClima = async (lat, lng) =>{

	let resp =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`)
					
		if(resp.data.cod !== 200){
			throw new Error (`No hay resultados para la ciudad con coordenadas ${ lat }, ${ lng }`);
		}

		let main = resp.data.main;
					
		return main.temp;

}

module.exports = {
	getClima
}
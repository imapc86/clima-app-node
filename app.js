/*
const axios = require('axios');

const argv = require('yargs').options({
		direccion:{
			alias: 'd',
			desc: 'Direccion de la ciudad para obtener el clima',
			demand: true
		}
	}).argv;

console.log(argv.direccion);

let encodeUrl = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
	.then( respuesta => {
		//console.log(respuesta.data);

		//Para visualizar todo el contenido del objeto:
		//console.log(JSON.stringify(respuesta.data, undefined, 2));

		//Tarea para resolver:

		let location = respuesta.data.results[0];

		//console.log(location);
		console.log(`Direcccion: ${location.formatted_address}`);
		console.log(`lat: ${location.geometry.location.lat}`);
		console.log(`lng: ${location.geometry.location.lng}`);

		//Otra forma:
		let coors = location.geometry.location;

		console.log(`lat: ${coors.lat}`);
		console.log(`lng: ${coors.lng}`);

	})
	.catch(e => console.log('Error: ', e));
*/

/*************************************************************************s
*
* El ejecicio se comento una vez resuelto para realizar optimizaciones.
*
**************************************************************************/

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;

/*

lugar.getLugarLatLng( argv.direccion)
	.then(resp => {
		console.log(resp);
	})
	.catch(e => console.log(e));

clima.getClima(19.4326077, -99.133208)
	.then(temp => {
		console.log(`La temperatura: ${temp}`);
	})
	.catch(e => console.log(e))

*/


/**
* Juntando los dos servicios en una sola función:
*/

let getInfo = async ( direccion) => {
	try{
		let coors = await lugar.getLugarLatLng(direccion);
		let temp = await clima.getClima (coors.lat, coors.lng);
		return `El clima en ${ coors.direccion } es de ${ temp } ºC`;
	}catch (e){
		return `No se pudo determinar el clima en ${direccion}`; 
	}
}


getInfo(argv.direccion)
	.then( mensaje => console.log(mensaje))
	.catch( e => console.log(e));




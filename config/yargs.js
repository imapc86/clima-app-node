/**
* Este archivo es para simplificar el archivo principal app.js
* Es la configuración del yargs.
*/

const argv = require('yargs').options({
		direccion:{
			alias: 'd',
			desc: 'Direccion de la ciudad para obtener el clima',
			demand: true
		}
	}).argv;


/*Exportar archivo*/
module.exports={
	argv
}
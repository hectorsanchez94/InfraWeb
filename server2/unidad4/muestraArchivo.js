var fs = require('fs');

fs.readFile('/etc/passwd','utf-8', function (error,datos){
	if (error){
		console.log(error);
	}
	else{
		console.log(datos);
	}
});

console.log('Datos del archivo\n');

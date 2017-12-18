var datos = {
	mensaje : "Hola Mundo",
	contador : 0,
	patrones : [{patron : "Adapter",
		tipo : "structural"},
		{patron : "Observer",
			tipo : "Behavioral"}
	]
};

new Vue({
	'el' : "#app",
	data : datos,
	method : {
        cambiar : function () {
            this.semaforoRojo = !this.semaforoRojo
        }
    }

});

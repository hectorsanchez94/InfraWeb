/**
 * Created by Hector on 28/11/17.
 */

let datos = {
    semaforoRojo : false,
    mensaje :"Hola mundo"

};

const vue = new Vue({
    el : '#app',
    data : datos,
    method : {
        cambiar : function () {
            this.semaforoRojo = !this.semaforoRojo
        }
    }

});

//vue cli
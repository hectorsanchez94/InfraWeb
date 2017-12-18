function mayor2num (num1,num2){
	if(num1==num2){
		return console.log("Son iguales");
	}else{
		if(num1>num2){
			return console.log(num1+" es el mayor");
		}else{
			return console.log(num2+" es el mayor");
		}
	}
}
module.exports = mayor2num
//mayor2num(6,2);

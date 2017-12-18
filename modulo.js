function modulo(user,pw){
	/*var username, password;
	function doLogin(user, pw){
	        username = user;
		password = pw;
	}*/	
	var publicAPI={
		"User" : user,
		"Password": pw
	};
	return publicAPI;
}

module.exports = modulo

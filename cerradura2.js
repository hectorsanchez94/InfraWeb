function createIncrementor(start){
	return function (){
		start++;
		return start;
	}
}

var inc = createIncrementor(5);
inc();
console.log(inc());

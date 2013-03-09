function exercise01(n){
	var a = [];
	for (var i = 0; i <= n; i++) {
		a.push(i);      }
		return a;
	}; //a

	var odd = a.filter(function(item){ 
	    return item % 2===0;
	}) //b

	var multipy = odd.map(function(item){ //c
		return item= item*2;
	})

	var div = multiply.filter(function(item){
         return item % 4===0;
	}) //d

     div.reduce(function(a, b){
     	return a+b;
     }) //e


}

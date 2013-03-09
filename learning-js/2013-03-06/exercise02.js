for (var i = 1; i < 11; i++) {
	var riga="";
	for (var j = 1; j < 11; j++){
	    if(j===10){
		     riga = riga + j*i + "\t"
	    }else{
		   riga = riga + j*i + ",\t";
	       }
	   }

   console.log(riga);
}

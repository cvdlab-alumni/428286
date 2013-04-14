for (var i = 1; i < 11; i++) {
	var riga="";
	for (var j = 1; j < 11; j++){
         if(i===j){
           if(j===10)
         	  riga = riga + "1\t";
         	else 
         	  riga = riga + "1,\t"; 
         }else {
         	if(j===10)
         	  riga = riga + "0\t";
         	else 
         	  riga = riga + "0,\t"; 
         }
	}
   console.log(riga);
}

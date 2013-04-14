function exercise02(n){
 var arr = [];
   for(var i=0; i<=n ;i++){
     arr.push(Math.ceil(Math.random()*10)); //a
    } 
  

  var odd = arr.filter(function(item){ //b
  	     return item%2!==0;
  	          })
  var s = odd.sort(compare); //c
  return arr;
}
var compare = function (value1, value2) {
 return value1 - value2;
};
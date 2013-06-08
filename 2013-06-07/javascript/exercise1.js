
var domain = DOMAIN([[0, 60], [0, 60]])([24, 24]);


//exercise1
var montagne = function(d, z){
	var x = d[0];
	var y = d[1];

	if(x>0&&y>50){
		var z = SIN(y)*2+COS(x);
	}else if(y>10&&x>30){
		var z = SIN(x)*2+COS(y) + SIN(y)*2+COS(x);
	}
	else  z = Math.random()/6;

	
	return [x, y, z];
}

var m = MAP(montagne)(domain);

DRAW(COLOR([85/255,104/255,50/255])(m));
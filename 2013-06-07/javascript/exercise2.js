function beziera_2D(f){ return BEZIER(S1)(f)}
function beziera_1D(controlp){ return BEZIER(S0)(controlp)}
var dom1D = INTERVALS(1)(32)
var dom2D = DOMAIN([[0,1],[0,1]])([30,30])

function b_Dom1D(controlpoints){
	return MAP(BEZIER(S0)(controlpoints))(dom1D)
}

function b_Dom2D(functions){
	return MAP(BEZIER(S1)(functions))(dom2D) 
}
 


function cerc(r,z){
var points = [[1,0,z],[1,1,z],[0,1.62,z],[-1.22,1.22,z],[-2,0,z],[-1.22,-1.22,z],[0,-1.63,z],[1,-1,z],[1,0,z]];
var c = points.map(function(point){return [point[0]*r,point[1]*r,point[2]]})
var cerchio = beziera_1D(c);
return cerchio;
}



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


//exercise2
var dominioLago = DOMAIN([[20, 30], [20, 50]])([1,1]);

var lago = function (d,z) {
    
        var x = d[0];
        var y = d[1];
        var z = 0.1;
        return [x, y, z];
   
}


var l = MAP(lago)(dominioLago);

DRAW(COLOR([60/255,179/255,113/255])(l))
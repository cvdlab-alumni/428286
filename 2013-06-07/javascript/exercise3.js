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



//exercise01
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


//exercise02
var dominioLago = DOMAIN([[20, 30], [20, 50]])([1,1]);

var lago = function (d,z) {
    
        var x = d[0];
        var y = d[1];
        var z = 0.1;
        return [x, y, z];
   
}


var l = MAP(lago)(dominioLago);

DRAW(COLOR([60/255,179/255,113/255])(l))


//exercise03
uv = DOMAIN([[0,1],[0,1]])([20,20])

var albero = function(r,zBase,z1){
	var base = cerc(r,zBase);
	var fin = cerc(r,z1);
	var tronco = b_Dom2D([fin,base]);
	var baseCono = cerc(r+0.3,z1);
	var punto = [0,0,z1+0.5];
	var punto1 =[0,0,z1]
	var cono = MAP(CONICAL_SURFACE(punto)(baseCono))(uv);
	var cono1 = MAP(CONICAL_SURFACE(punto1)(baseCono))(uv);
	return STRUCT([COLOR([150/255,75/255,0])(tronco),COLOR([34/255,139/255,34/255])(cono),COLOR([34/255,139/255,34/255])(cono1)])
}

a = albero(0.08,0,1.2);


var areaAlberi = function(albero,n){
 var foresta = [];
	for(i=0;i<=n;i++){
		for(j=0;j<=n;j++){
			i=i+1;
			var al = T([0,1])([i*Math.random()/3,j*Math.random()/3])(albero);
			foresta.push(al);
		}
	}
	return foresta;}

fore = STRUCT(areaAlberi(a,20))
fore1 =STRUCT(areaAlberi(a,10))
fore2 =STRUCT(areaAlberi(a,16))

gg = T([0,1])([10,40])(fore2);
rr = T([0,1])([10,35])(fore1);
te = T([0,1])([10,30])(fore);


ge = T([0,1])([14,40])(fore2);
re = T([0,1])([14,35])(fore);
tte = T([0,1])([14,30])(fore1);

DRAW(gg)
DRAW(rr)
DRAW(te)
DRAW(ge)
DRAW(re)
DRAW(tte)
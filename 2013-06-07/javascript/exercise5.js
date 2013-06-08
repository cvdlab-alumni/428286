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


//exercise4 exercise5

function casa(altezza, lunghezza, p){ //a

	this.altezza= altezza;
	this.lunghezza = lunghezza;
	this.p = p;

}

casa.prototype.giardino = function(){

	size = this.lunghezza;
	pr=this.p/2;
	var points = [[0,0,pr+0.1],[size,0,pr+0.1],[0,0,pr+0.78],[size,0,pr+0.78]];
	var cells = [[0,1,2],[1,3,2]];
	var simplicialComplex = SIMPLICIAL_COMPLEX(points)(cells);
	return COLOR([43/255,139/255,43/255])(simplicialComplex);

}

//strada davanti casa
casa.prototype.strad = function(){

	size = this.lunghezza;
	pr=this.p/2;
	var points = [[size+0.2,0,-0.2],[size+1.6,0,-0.2],[size+0.2,0,pr+1.5],[size+1.6,0,pr+1.5]];
	var cells = [[0,1,2],[1,3,2]];
	var simplicialComplex = SIMPLICIAL_COMPLEX(points)(cells);
	return COLOR([64/255,64/255,64/255])(simplicialComplex);

}

casa.prototype.model = function (){ //b

	height = this.altezza/2;
	size = this.lunghezza;
	pr=this.p/2;
	var points = [[0,0],[size,0],[0,height],[size,height],[size/2,height+0.5]];
	var cells = [[0,1,2],[1,3,2],[2,3,4]];
	var simplicialComplex = SIMPLICIAL_COMPLEX(points)(cells);
	var extruded = EXTRUDE([pr])(simplicialComplex);
	return COLOR([240/255,220/255,130/255])(extruded);
}



var c3 = new casa(2,1,4);

var c = new casa(3,2,3.2);


function settlement(coordinata,d,numCase,cas,cass){ 
	this.coordinata = coordinata
	this.d = d;
	this.numCase = numCase;
	this.cas = cas;
	this.cass = cass;
}

//aggiunto pezzo di strada
settlement.prototype.model = function(){
	distanza = this.d;
	n = this.numCase;
	cas1 = this.cas;
	cas2 = this.cass;
	coordinataT = this.coordinata;
	var tras = T([coordinataT])([distanza]);
	var houses = STRUCT(
		REPLICA(n)
		(
			[
			cas1.model(),cas1.strad(),cas1.giardino(),tras,cas2.model(),cas2.strad(),cas2.giardino(),tras
			]
		)
		)
	housesRot = R([1,2])([PI/2])(houses)

return housesRot;
}

var s = new settlement(0,4,5,c,c3);
var ss = new settlement(0,4,5,c,c3);


function matr(lineaY,settl){ //a

	this.lineaY =lineaY;
	this.settl = settl;

}

matr.prototype.model = function(){
	l = this.lineaY;
	s = this.settl;
	var m = T([1])([l])(s.model());
	return m;
}

var mm = new matr(-3,s);
var mm1 = new matr(-7,ss);


matr.prototype.lunghezzaFila =function(){
	var nCase = this.settl.numCase;
	var tot = this.settl.d*(nCase) + this.settl.cas.lunghezza*(nCase+1) + this.settl.cass.lunghezza*(nCase+1);
	return tot;
}



abitazioni = STRUCT([mm.model(),mm1.model()]);



function strada(filaCaseMatr){ //a

	this.filaCaseMatr = filaCaseMatr;

}

//strade principali

var str = new strada(mm);
var str1 = new strada(mm1);

strada.prototype.model =function(i){
	m = this.filaCaseMatr;
	var x = m.lunghezzaFila();
	var y = m.lineaY;
	var points = [[0,y+i+0.2],[0,y+i+1.2],[x,y+i+0.2],[x,y+i+1.2]];
	var cells = [[0,1,2],[1,3,2]];
	var simplicialComplex = SIMPLICIAL_COMPLEX(points)(cells);
	return COLOR([64/255,64/255,64/255])(simplicialComplex);
}

var strade = STRUCT([str1.model(0),str.model(0)]); 
var fineStrada = str1.model(-4)

caseEstrade = STRUCT([strade,fineStrada,abitazioni]);
tc = T([1,2])([11,0.2])(caseEstrade)
DRAW(tc);
rc = R([0,1])([PI/2])(tc)
DRAW(T([0,1])([9.2,9.1])(rc));

FV = [[4,3,2,5],[0,6,0],[0,4,1],[1,4,2,5],[4,2,6,6],[0,0,7], [2,5,1], [1,2,3], [0,1,2]]

V = [[0,6],[0,2],[5,0],[9,0],[9,2],[4,2],[5,7],[7,6],[3,0]]
larModel = [V,FV]



function lar_to_obj(model){
var s1,s2 = "";
var v = model[0];
var f = model[1];

for (var i = 0; i< v.length; i++) {
	var vv = v[i];
	s1 = s1 + "v"+" "+vv[0]+" "+vv[1]+" "+"0\n";

};


for (var j = 0; j< f.length; j++) {
	var ff = f[j];
	if(ff[3]!=undefined)
	 s2 = s2 +"f"+" "+ff[0]+" "+ff[1]+" "+ff[2]+" "+ff[3]+"\n";
else s2 = s2 +"f"+" "+ff[0]+" "+ff[1]+" "+ff[2]+"\n";
};

tots = s1+"\n"+s2;

return tots;
}


lar_to_obj(larModel)
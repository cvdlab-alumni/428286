T = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
     return object.clone().translate(dims, values);
    };
  };
};
  
R = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });
   
  return function (angle) {
    return function (object) {
      return object.clone().rotate(dims, angle);
    };
  };
};
  
S = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
      return object.clone().scale(dims, values);
    };
  };
};

S3 = S2;
S2 = S1;
S1 = S0;

GRID = SIMPLEX_GRID;

NN = REPLICA;

VIEW = DRAW;

//exercise1
//external columns
circle = DISK(0.18)([30,1]);
column = EXTRUDE([3.58])(circle);
columns = STRUCT(NN(5)([column, T([1])([3.94])]))
balcon_column = T([2])([7.55])(column)
c = STRUCT([columns, balcon_column])

//pillars0
square_pillars0 =  T([1,2,3])([2.08,7.55,0.29])(T([1,2])([-0.18,-0.18])(GRID([[0.36,-1.86,0.36,-3.58+0.36,0.36,-3.58,0.36],[0.36],[3.29]])))

pillars0 = STRUCT([c,square_pillars0])

//pillars1
square_pillar_front_2 = T([1,3])([0.36*3+3.58*3,3.58+0.43])(T([1,2])([-0.18,-0.18])(GRID([[0.36,-3.58,0.36],[0.36],[3.15]])))
square_pillar_front_2_3 = T([3])([3.58+0.43])(T([1,2])([-0.18,-0.18])(GRID([[0.36,-3.58,0.36,-3.58,0.36],[0.36],[3.15+3.15+0.43]])))

square_pillar_behind_2 = T([1,2,3])([0.36*2+3.58*2,7.55,3.58+0.43])(T([1,2])([-0.18,-0.18])(GRID([[0.36,-3.58*2-0.36,0.36],[0.36],[3.15]])))
square_pillar_behind_2_3 = T([2,3])([7.55,3.58+0.43])(T([1,2])([-0.18,-0.18])(GRID([[0.36,-3.58-0.36,0.36],[0.36],[3.15+3.15+0.43]])))

column1 = EXTRUDE([3.15])(circle);
column11 = T([1,2,3])([0.36*3+3.58*3,7.55,3.58+0.43])(column1)

pillars1 = STRUCT([square_pillar_front_2,square_pillar_front_2_3,square_pillar_behind_2,square_pillar_behind_2_3,column11])

//pillars2
square_pillars_front_3 = T([3])([3.58*2+0.43])(T([1,2])([-0.18,-0.18])(GRID([[-0.36*4-3.58*4,0.36],[0.36],[3.15]])))
square_pillar_behind_3 = T([2,3])([7.55,3.58*2+0.43])(T([1,2])([-0.18,-0.18])(GRID([[-0.36*2-3.58*2,0.36,-3.58,0.36,-3.58,0.36],[0.36],[3.15]])))
pillars2 = STRUCT([square_pillars_front_3,square_pillar_behind_3])

//pillars3
square_pillars_behins_4 = T([2,3])([7.55+0.34,3.58*3+0.43+1.58])(T([2])([-0.11])(GRID([[0.22],[0.22],[1.57]])))
square_pillars_behins_4a = T([2,3])([7.55,3.58*3+0.43])(T([1,2])([-0.11,-0.11])(GRID([[-3.58-0.18-0.11-0.36-0.07,0.22],[0.22],[3.15]])))
square_pillars_behins_4b = T([2,3])([7.55,3.58*3+0.43])(T([1,2])([-0.18,-0.18])(GRID([[-0.36*2-3.58*2,0.36,-3.58,0.36,-3.58,0.36],[0.36],[3.15]])))
square_pillars_front_4 = T([3])([3.58*3+0.43])(T([1,2])([-0.18,-0.18])(GRID([[-0.36*2-3.58*2,0.36,-3.58-0.36-3.58,0.36],[0.36],[3.15]])))
pillars3 = STRUCT([square_pillars_behins_4,square_pillars_behins_4a,square_pillars_behins_4b,square_pillars_front_4])

building = STRUCT([pillars0,pillars1,pillars2,pillars3])
VIEW(building)

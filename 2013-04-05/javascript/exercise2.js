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

//exercise01
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

//exercise02
//floor0
floor_0_a = T([1,2])([1.90,2.64])(CUBOID([10.09,6.81,0.29]))
floor_0_b = T([1,2])([2.76,2.6])(DISK([0.86])([30]))
floor_0_b_ex = EXTRUDE([0.29])(floor_0_b)

floor_0_c = T([1,2])([-0.18,7.55-0.18])(CUBOID([2.08,2.08,0.29]))
floor_0_d = T([1,2])([11.63+0.36,5.72])(CUBOID([1.81,3.73,0.29]))
floor_0_e = T([1,2])([11.63+0.36+1.86,7.58])(DISK([1.86])([30]))
floor_0_e_ex = EXTRUDE([0.29])(floor_0_e)
floor_0_f = T([1,2])([11.63+0.36,4.55])(CUBOID([0.93,1.17,0.29]))
floor0 = STRUCT([floor_0_a,floor_0_b_ex,floor_0_c,floor_0_d,floor_0_e_ex,floor_0_f])

//floor1
floor_1_a = T([1,2,3])([-0.18,-0.18,3.58])(CUBOID([3.44,7.55+1.9,0.43]))
floor_1_b = T([1,2,3])([-0.18+3.44,-0.18,3.58])(CUBOID([16.1-3.40,7.59,0.43]))
floor_1_c = T([1,2,3])([8.5-0.18,7.59-0.18,3.58])(CUBOID([16.15-8.5,9.09-7.59,0.43]))
floor_1_d = T([1,2,3])([-0.18-1.65,7.55-0.18,3.58+0.13])(CUBOID([1.65,1.55,0.30]))
floor1 = STRUCT([floor_1_a,floor_1_b,floor_1_c,floor_1_d])

//floor2
floor_2_a = T([1,2,3])([8.5-0.45,-0.18,3.58*2])(CUBOID([16.1-8.5+0.25,7.59,0.43]))
floor_2_b = T([1,2,3])([6.83-0.18,7.59-0.18,3.58*2])(CUBOID([16.1-6.83,9.09-7.59,0.43]))
floor_2_c = SIMPLICIAL_COMPLEX([[6.63,7.45],[8.27,7.45],[8.27,0.05],[7.72,0.05]])([[0,1,2],[2,3,0]])
floor_2_c_ex = EXTRUDE([0.43])(floor_2_c);
f = T([3])([3.58*2])(floor_2_c_ex)
floor2 = STRUCT([floor_2_a,floor_2_b,f])

//floor3
floor_3_a = T([1,2,3])([-0.18,-0.18,3.58*3])(CUBOID([16,7.87,0.43]))
floor_3_b = T([1,2,3])([-0.18,7.59,3.58*3])(CUBOID([8.23,1.5,0.43]))
floor_3_c = T([1,2,3])([12.45,7.59,3.58*3])(CUBOID([3.4,1.5,0.43]))

floor3 = STRUCT([floor_3_a,floor_3_b,floor_3_c])

//floor4
vetrata = T([1,2,3])([-0.2,-0.2,3.58*4])(CUBOID([10,9,1.3]))

floor4 = STRUCT([vetrata])

building = STRUCT([floor0,floor1,floor2,floor3,floor4,building])

VIEW(building)
from pyplasm import *

def beziera_1D(controlp): 
	return BEZIER(S1)(controlp)

def beziera_2D(f):

	return BEZIER(S2)(f)
dom1D = INTERVALS(1)(32)
dom2D = PROD([dom1D,dom1D])

def b_Dom1D(controlpoints):
	return MAP(BEZIER(S1)(controlpoints))(dom1D)

def b_Dom2D(functions):
	return MAP(BEZIER(S2)(functions))(dom2D)

toro = T([1,2,3])([4.4,3,0])(TORUS([1.2,1.6])([20,20]))


a = beziera_1D([[3.77, 3.55,0.2], [3.66, 2.99,0.2], [3.65, 3.26,0.2], [4.21, 2.48,0.2]])
b = beziera_1D([[4.95, 3.53,0.2], [5.19, 3.02,0.2], [4.87, 2.95,0.2], [4.53, 2.49,0.2]])
A = b_Dom2D([a,b])

a1 = beziera_1D([[3.68, 3.54,0],[3.69, 2.71,0],[3.2, 3.42,0],[4.09, 2.2,0]])

l = b_Dom2D([a,a1])

b1 = beziera_1D([[5.11, 3.55,0],[5.1, 2.95,0],[5.49, 3.15,0],[4.64, 2.22,0]])

r = b_Dom2D([b,b1])

clac = b_Dom2D([a1,b1])


ty = beziera_1D([[5.5, 3.42,0], [5.4, 3.51,0.3], [5.59, 3.25,0.3], [5.57, 2.89,0]])
tx = beziera_1D([[4.99, 3.52,0], [5.09, 3.33,0.3], [4.99, 3,0.3], [5.2, 2.92,0]])

xy = b_Dom2D([ty,tx])


e1 = beziera_1D([[3.8, 3.59,0], [3.68, 3,0.3], [3.64, 3.08,0.3], [3.55, 2.98,0]])
e11 = beziera_1D([[3.35, 3.52,0], [3.23, 3.39,0.3], [3.06, 3.35,0.3], [3.18, 2.96,0]])
ee = b_Dom2D([e1,e11])

sotto = beziera_1D([[4.16, 1.92,0], [4.3, 1.93,0.3], [4.41, 1.9,0.3], [4.56, 1.93,0]])
sotto1 = beziera_1D([[4.09, 2.21,0], [4.41, 2.37,0.3], [4.41, 2.27,0.3], [4.64, 2.21,0]])
sottof = b_Dom2D([sotto,sotto1])

nero = COLOR(BLACK)(STRUCT([A,toro,l,clac,r]))
grigio = COLOR(GRAY)(STRUCT([xy,ee,sottof]))

VIEW(STRUCT([nero,grigio]))

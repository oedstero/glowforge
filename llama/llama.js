var toInches = 96 ; 			// one inch is 96 points on the Glowforge

var lengthA = 35/16 * toInches;
var lengthB = 14/16 * toInches;
var lengthC = 10/16 * toInches; 
var lengthD = 7/16 * toInches;
var lengthE = 5/16 * toInches;
var lengthF = 15/16 * toInches;

var height1 = 22/16 * toInches;
var height2 = 41/16 * toInches;
var height2 = 37/16 * toInches;
var height3 = 5/16 * toInches;
var height4 = 13/16 * toInches;
var height5 = 11/16 * toInches;

var offset1 = 1/4 * toInches; // tweak this to shift center channel from right to left

var center = view.center;
var point1 = new Point(center.x-lengthF+offset1,center.y);
var point2 = new Point(point1.x,point1.y+height2-height3);
var point3 = new Point(point2.x-lengthB,point2.y);
var point4 = new Point(point3.x,point3.y-height2+height3);
var point5 = new Point(point4.x-lengthC-offset1-lengthD-lengthE,point4.y);
var point6 = new Point(point5.x,point5.y+height1);
var point7 = new Point(point6.x+lengthE,point6.y);
var point8 = new Point(point7.x,point7.y-height1+height3);
var point9 = new Point(point8.x+lengthD,point8.y);
var point10 = new Point(point9.x,point9.y+height2-height3);
var point11 = new Point(point10.x+lengthA,point10.y);
var point12 = new Point(point11.x,point11.y-height2+height3);
var point13 = new Point(point12.x+lengthD,point12.y);
var point14 = new Point(point13.x,point13.y+height4);
var point15 = new Point(point14.x+lengthE,point14.y);
var point16 = new Point(point15.x,point15.y-height5);


var objectPath = new Path();
objectPath.add(center);
objectPath.add(point1);
objectPath.add(point2);
objectPath.add(point3);
objectPath.add(point4);
objectPath.add(point5);
objectPath.add(point6);
objectPath.add(point7);
objectPath.add(point8);
objectPath.add(point9);
objectPath.add(point10);
objectPath.add(point11);
objectPath.add(point12);
objectPath.add(point13);
objectPath.add(point14);
objectPath.add(point15);
objectPath.add(point16);
objectPath.add(center);
objectPath.strokeColor = 'red';

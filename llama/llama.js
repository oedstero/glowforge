var toInches = 96 ;                     // one inch is 96 points on the Glowforge

var lengthA = 139/64 * toInches;
var lengthB = 27/32 * toInches;
var lengthC = 21/32 * toInches;
var lengthD = 45/128 * toInches;
var lengthE = 15/64 * toInches;
var lengthF = 119/128 * toInches;

var height1 = 159/128 * toInches;
var height2 = 335/128 * toInches;
var height3 = 19/64 * toInches;
var height4 = 107/128 * toInches;
var height5 = 23/32 * toInches;
var height6 = 1/4 * toInches;

var offset1 = 1/8 * toInches; // tweak this to chop some off the top.

var center = view.center;
var point0 = new Point(center.x+offset1,center.y);
var point1 = new Point(center.x-lengthF,center.y);
var point2 = new Point(point1.x,point1.y+height2-height3);
var point3 = new Point(point2.x-lengthB,point2.y);
var point4 = new Point(point3.x,point3.y-height2+height3);
var point5 = new Point(point4.x-lengthC-lengthD-lengthE,point4.y);
var point6 = new Point(point5.x,point5.y+height1);
var point7 = new Point(point6.x+lengthE,point6.y);
var point8 = new Point(point7.x,point7.y-height1+height3-offset1);
var point9 = new Point(point8.x+lengthD,point8.y);
var point10 = new Point(point9.x,point9.y+height2-height3+offset1);
var point11 = new Point(point10.x+lengthA,point10.y);
var point12 = new Point(point11.x,point11.y-height2+height3-offset1);
var point13 = new Point(point12.x+lengthD,point12.y);
var point14 = new Point(point13.x,point13.y+height4+offset1);
var point15 = new Point(point14.x+lengthE,point14.y);
var point16 = new Point(point15.x,point15.y-height5-offset1);

var objectPath = new Path();
objectPath.add(point0);
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
objectPath.add(point0);
objectPath.strokeColor = 'red';

// chopping off the top didn't quite work
// var point20 = new Point(center.x+lengthD,center.y+height6);
// var point21 = new Point(center.x-lengthG,center.y + height6);
// var line = new Path();
// line.strokeColor = 'red';
// line.add(point20);
// line.add(point21);

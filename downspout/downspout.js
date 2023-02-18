var toInches = 96 ;                     // one inch is 96 points on the Glowforge

// chipboard test fit
// .06 thick / 340 speed / 100% power

var lengthA = (3+9/16) * toInches; // Width of the porch support
var lengthB = 3.25 * toInches; // Width of the downspout
var lengthC = (2+3/8) * toInches; // Length of the downspout

var offset1 = 3.45 * toInches; // How far into the porch support to go
var offset2 = 1.25 * toInches; // top // How much space between the porch and the downspout
var offset2 = 1 * toInches; // bottom 
var offset3 = 1 * toInches; // How much meat to offset everything for support

var center = view.center;
var point1 = new Point(center.x-offset1-offset2,center.y);
var point2 = new Point(point1.x-(lengthC/2),point1.y+(lengthA-lengthB)/2);
var point3 = new Point(point2.x-(lengthC/2)-offset3,point2.y);
var point4 = new Point(point3.x,point3.y+offset3+lengthB+offset3);
var point5 = new Point(point4.x+offset3+(lengthC/2),point4.y);
var point6 = new Point(point5.x+lengthC/2,point5.y+(lengthA-lengthB)/2);
var point7 = new Point(point6.x+offset2+offset1,point6.y);
var point8 = new Point(point7.x,point7.y-offset3);
var point9 = new Point(point8.x-offset1,point8.y);
var point10 = new Point(point9.x,point8.y-lengthA);
var point11 = new Point(point10.x+offset1,point10.y);
var point12 = new Point(point10.x-offset2, point10.y+(lengthA-lengthB)/2);
var point13 = new Point(point12.x-lengthC,point12.y);
var point14 = new Point(point13.x,point12.y+lengthB);
var point15 = new Point(point14.x+lengthC,point14.y);

var objectPath = new Path(); // base
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
objectPath.add(center);
objectPath.strokeColor = 'red';

var objectPath2 = new Path(); // downspout
objectPath2.add(point12);
objectPath2.add(point13);
objectPath2.add(point14);
objectPath2.add(point15);
objectPath2.add(point12);
objectPath2.strokeColor = 'red';

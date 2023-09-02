// cable tender size in inches
var height = 15 ;
var width = 19 ;
var buckets = 8;

var depth = 3;

var toInches = 96 ;                     // one inch is 96 points on the Glowforge

var cutWidth = 0 ; var cutHeight = 0;
var cablePath = new Path();
cablePath.strokeColor = 'red';
cablePath.add(new Point(0, 0));
cablePath.add(new Point((height+1) * toInches, 0));
cablePath.add(new Point((height+1) * toInches, depth * toInches));
cablePath.add(new Point(0, depth * toInches));
cablePath.add(new Point(0, 0));

// 0 and 1
var circle = new Path.Circle({ center: new Point(( 1 * height / buckets - .5 ) * toInches, depth / 2 * toInches ),
   radius: (5/64/2 * toInches), strokeColor: 'red', strokeWidth: 1 });

// 2 and 3
var circle = new Path.Circle({ center: new Point(( 2 * height / buckets - .5 ) * toInches, depth / 2 * toInches ),
   radius: (7/64/2 * toInches), strokeColor: 'red', strokeWidth: 1 });

// 4 and 5
var circle = new Path.Circle({ center: new Point(( 3 * height / buckets - .5 ) * toInches, depth / 2 * toInches ),
   radius: (1/8/2 * toInches), strokeColor: 'red', strokeWidth: 1 });

// 6 and 8
var circle = new Path.Circle({ center: new Point(( 4 * height / buckets - .5 ) * toInches, depth / 2 * toInches ),
   radius: (5/32/2 * toInches), strokeColor: 'red', strokeWidth: 1 });

// 10 and 12
var circle = new Path.Circle({ center: new Point(( 5 * height / buckets - .5 ) * toInches, depth / 2 * toInches ),
   radius: (7/32/2 * toInches), strokeColor: 'red', strokeWidth: 1 });

// 13 and 14
var circle = new Path.Circle({ center: new Point(( 6 * height / buckets - .5 ) * toInches, depth / 2 * toInches ),
   radius: (1/4/2 * toInches), strokeColor: 'red', strokeWidth: 1 });

// 15 and 16
var circle = new Path.Circle({ center: new Point(( 7 * height / buckets - .5 ) * toInches, depth / 2 * toInches ),
   radius: (17/64/2 * toInches), strokeColor: 'red', strokeWidth: 1 });

// 17 and 18
var circle = new Path.Circle({ center: new Point(( 8 * height / buckets - .5 ) * toInches, depth / 2 * toInches ),
   radius: (19/64/2 * toInches), strokeColor: 'red', strokeWidth: 1 });


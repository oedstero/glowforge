// cable tender size in inches
var width = 18 ;
var height = 3 ;
var separation = 1;                     // one inch between the notches
var depth = .6 ;                        // how deep into the height to make a notch

// doing this the lazy way ... TODO : add another loop and math and autocalculate
var numLarge = 4;
var largeSize = .4;
var numMedium = 7;  
var mediumSize = .2;
var numSmall = 3;
var smallSize = .12;

var toInches = 96 ;                     // one inch is 96 points on the Glowforge

var cutWidth = 0 ; var cutHeight = 0;
var cablePath = new Path();
cablePath.strokeColor = 'red';
cablePath.add(new Point(0, 0));
cablePath.add(new Point(0, height * toInches));

// Large notches
for (numNotches = 0; numNotches < numLarge; numNotches++) {
   cutWidth += separation;
   cablePath.add(new Point(cutWidth * toInches, height * toInches));
   cutHeight = height - height * depth;
   cablePath.join(Path.Arc(new Point(cutWidth * toInches, cutHeight * toInches),
      new Point((cutWidth+largeSize/2) * toInches, (cutHeight-largeSize/2) * toInches),
      new Point((cutWidth+largeSize) * toInches, cutHeight * toInches)));
   cutWidth += largeSize;
   cablePath.add(new Point(cutWidth * toInches, height * toInches));
}  
// Medium notches
for (numNotches = 0; numNotches < numMedium; numNotches++) {
   cutWidth += separation;
   cablePath.add(new Point(cutWidth * toInches, height * toInches));
   cutHeight = height - height * depth;
   cablePath.join(Path.Arc(new Point(cutWidth * toInches, cutHeight * toInches),
      new Point((cutWidth+mediumSize/2) * toInches, (cutHeight-mediumSize/2) * toInches),
      new Point((cutWidth+mediumSize) * toInches, cutHeight * toInches)));
   cutWidth += mediumSize;
   cablePath.add(new Point(cutWidth * toInches, height * toInches));
}  

// Small notches
for (numNotches = 0; numNotches < numSmall; numNotches++) {
   cutWidth += separation;
   cablePath.add(new Point(cutWidth * toInches, height * toInches));
   cutHeight = height - height * depth;
   cablePath.join(Path.Arc(new Point(cutWidth * toInches, cutHeight * toInches),
      new Point((cutWidth+smallSize/2) * toInches, (cutHeight-smallSize/2) * toInches),
      new Point((cutWidth+smallSize) * toInches, cutHeight * toInches)));
   cutWidth += smallSize;
   cablePath.add(new Point(cutWidth * toInches, height * toInches));
}

cablePath.add(new Point(width * toInches, height * toInches));
cablePath.add(new Point(width * toInches, 0));
cablePath.add(new Point(0, 0));

var diameter = 3 ;
var circlePad = .5;
var squareSize = 30;
var squarePad = 10;
var toInches = 96 ;                     // one inch is 96 points on the Glowforge

var circle = new Path.Circle({ center: view.center, radius: (diameter/2 * toInches), strokeColor: 'red', strokeWidth: 1 });
var innercircle = new Path.Circle({ center: view.center, radius: ((diameter - circlePad)/2 * toInches ) });

for (var x = view.center.x - circle.bounds.width / 2; x < view.center.x + circle.bounds.width / 2; x += squareSize) {
    for (var y = view.center.y - circle.bounds.height / 2; y < view.center.y + circle.bounds.height / 2; y += squareSize) {
        var square = new Path.Rectangle({
            point: [x, y],
            size: [squareSize-squarePad, squareSize-squarePad],
            strokeColor: 'red',
            strokeWidth: 1
        });
        if (!innercircle.contains(square.bounds.center)) { square.remove(); }
    }
}
innercircle.remove();

var circle = new Path.Circle({ center: view.center + diameter * toInches, radius: (diameter/2 * toInches), strokeColor: 'red', strokeWidth: 1 });
var innercircle = new Path.Circle({ center: view.center + diameter * toInches, radius: ((diameter - circlePad)/2 * toInches ), strokeColor: 'red', strokeWidth: 1 });

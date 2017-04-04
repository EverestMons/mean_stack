function VehicleConstructor(name,number_of_wheels,number_of_passengers, speed){

  var distance_travelled = 0;
  var updateDistanceTravelled = function (speed){
    distance_travelled += speed;
    return distance_travelled;
  };
  var Vehicle = {};
    this.name = name;
    this.speed = 0;
    this.number_of_wheels = number_of_wheels;
    this.number_of_passengers = number_of_passengers;

this.move = function (speed){
  updateDistanceTravelled(speed);
  this.makenoise();
};

this.checkMiles = function(){
  console.log("you've travelled " + distance_travelled + " miles");
};

this.makenoise = function(){
  console.log('Beep, Beep');
};
return vehicle;
}

class Rectangle {
  constructor(height, width) {
    this.height=height;
    this.width=width;
  }
}



















var Bike = VehicleConstructor('Bike', 2, 1);
var Sedan = VehicleConstructor('Sedan', 4, 5);
var Bus = VehicleConstructor('Bus', 8, 45);

Bike.makenoise = function(){
  console.log('Ring, ring!');
};

Sedan.makenoise = function(){
  console.log('Honk, honk!');
};

Bus.seatCount = function(passengers){
  console.log(Bus.number_of_passengers-passengers + " seats remaining");
};

Bus.move(15);
Bus.checkMiles();
Bus.move(49);
Bus.checkMiles();

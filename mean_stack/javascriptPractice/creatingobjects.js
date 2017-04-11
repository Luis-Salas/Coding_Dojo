function VehicleConstructor(name,wheels,passengers,speed){
  var vehicle = {};
  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;
  vehicle.speed = speed;
  var distance_traveled = 0;
  var privateMethod = function(){
    distance_traveled += this.vehicle.speed
  }
  this.getDistance = function(){
privateMethod()
  }


  vehicle.noise = function(){
    console.log(vehicle.name + 'is making noise');
  }
  return vehicle;
}

var sedan = VehicleConstructor("ferrari",2,2,100);
sedan.noise = function(){
  console.log('vroom')
}
var bike = VehicleConstructor("ducati",80,1,1);
bike.noise = function(){
  console.log('ring ring')
}
var bus = VehicleConstructor("bus?",4,0,60);
bus.pickUp =function(){
  bus.passengers += 1
  console.log(this.passengers)
  console.log(this.speed)
  console.log(bus.getDistance());
}
bus.pickUp();

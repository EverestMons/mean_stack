function create(name){
  var newPerson = {
    'name': name,
    'distance_traveled': 0
  };
    console.log(name + " has been created!");
    return newPerson;
}
var Mark = create('Mark');
var Jane = create('Jane');
say_something("I am", Mark);
say_something("Hello, I am", Jane);

function say_something(x,dict){
  console.log( x +" "+ dict.name);
}

function say_name(dict){
    console.log (dict.name);
  }

function walk(){
  person.distance_traveled += 3;
  console.log(person.name + ' is walking');
}

function run(){
  person.distance_traveled += 10;
  console.log(person.name + ' is running');
}

function crawl(){
  person.distance_traveled += 1;
  console.log(person.name + ' is crawling');
}

function ninjaConstructor(name){
  var ninja = {
    'name': name,
    'cohort': 'MEAN',
    'belt_level': 'yellow',
  };
  return ninja;
}

var James = ninjaConstructor('James');

function levelUp(ninja){
  ninja.belt_level = 'red';
  console.log(ninja.name + ' has been made a red-belt!');
}

levelUp(James);

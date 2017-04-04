person = {
  name : "Mark",
  distance_traveled: 0,
};

function add(x,y){
  var total = 0;
  for (var i = x; i <= y; i++){
    total += i;
  }
  console.log(total);
}

function findMin(arr){
  var min = arr[0];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  console.log (min);
}

function Avg(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  console.log(sum/arr.length);
}

function say_name(dict){
    console.log (dict.name);
  }

function say_something(x,dict){
  console.log( x +" "+ dict.name);
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

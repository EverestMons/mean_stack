function runningLogger(){
  console.log("I am running");
}

function multiplyByTen(x){
    x *= 10;
    console.log (x);
}

function returnStringOne(){
  string = "I am string one";
  console.log (string);
}

function returnStringTwo(){
  string = "I am string two";
  console.log (string);
}

function caller(x){
  if (typeof x === "function"){
    console.log("Caller");
  }
}

function myDoubleConsoleLog(x, y){
  if (typeof x === "function"){
    x();
  if (typeof y === "function"){
    y();
  }
  }
}

function caller2(x){
  console.log("starting");
  setTimeout(function(){console.log("ending?");
  return "interesting";}, 2000);
}

caller2(myDoubleConsoleLog);

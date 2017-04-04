// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);

var first_variable;
function firstFunc(){
  first_variable = "Yippee I was first!";
  console.log(first_variable);
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
firstFunc();
//
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);

var food;
function eat(){
  food = "Chicken";
  console.log(food);
  food = "half-chicken";
  console.log(food);
  food = "gone";
  console.log(food);
}
eat();

var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);

var new_word;
function lastFunc(){
  new_word="NEW!";
  new_word="old";
  console.log(new_word);
}
lastFunc();

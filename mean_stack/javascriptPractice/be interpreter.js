function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
var first_variable = "Yipee I was first!";
console.log(first_variable);

function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
var food = "Chicken";
eat();
console.log(food);

function lastFunc() {
  new_word = "old";
}
var new_word = "NEW!";
console.log(new_word);

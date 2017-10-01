var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(cities, element){
  var cities = ["foo"];
  cities.push(1);
  return cities;
  //var world = new countries("Chile", "Tokyo", "Singapore", "Mexico City");
}
/*function destructivelyAddElementToBeginningOfArray(countries, element){
  var countries = ["Japan", "Singapore", "Mexico"];
  ["Chile", ...countries];
}*/
/*function addElementToBeginningOfArray(countries, element){
  var countries = ["Japan", "Mexico City"];
  countries = ["Chile", ...countries];
}*/
function destructivelyAddElementToBeginningOfArray(foo, element){
  //var rando = ["foo"];
  foo.unshift("foo");
  //[...array, 1];
  return foo;
}
function addElementToEndOfArray(foo, element){
  //var rando = [1, "foo"]
  rando = [...foo,"foo"];
  return rando;
}
function destructivelyAddElementToEndOfArray (foo, element){
  foo.push("foo");
  return foo;
}
function accessElementInArray(foo, index){
  var number = [1, 2, 3];
  return number[2];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  //var thunder = [1, 2, 3];
  array.shift(0);
  return array;
}
function removeElementFromBeginningOfArray(array){
  //var dogs = ["zoe", "mia", "princess"];
  array.slice(0);
  return array
}
function destructivelyRemoveElementFromEndOfArray(){

}

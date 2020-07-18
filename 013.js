var add = function(a, b){
  console.log(arguments); //arguments gelen parametreleri temsil eder
  var i,sum = 0;
  for(i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

console.log(add(10, 20));
var myArray = [10, 20, "Hello", {}];
var myFunction = function(item){
  console.log(item);
};

myArray.forEach(myFunction);
//myArray.push(100); //sona ekler
//myArray.pop(); //ekleneni kaldırır
//myArray.shift(); //baştakini kaldırır
//myArray.unshift("abcde"); //başa ekler abcde'yi
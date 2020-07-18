var myObj = {
  "myProp": "Hello"
};

var myObj2;
myObj2 = myObj;

console.log(myObj2.myProp);
if(myObj === myObj2) // üç eşit nesneleri karşılaştırırken kullanılır.
  console.log("ikisi eşit");
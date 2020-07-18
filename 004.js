var myObj = {
  "prop" : "hello",
  "prop2" : 123,
  "objProp" : {
    "innerProp" : "İnner Property"
  }
};
console.log(myObj.objProp);
console.log(myObj.objProp.innerProp);
var propertyName = "prop";
console.log(myObj["prop"]);

myObj.objProp.newInner = "Huso";
console.log(myObj.objProp.newInner);
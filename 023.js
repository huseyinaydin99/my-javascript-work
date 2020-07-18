function createPerson(){
  var returnObj = {
    "firstName": "Hüseyin",
    "lastName": "Aydın"
  };  
  return returnObj;
}

var person = createPerson();
console.log(person.firstName);
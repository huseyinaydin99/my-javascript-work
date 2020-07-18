var person = {
  "adi": "Hüseyin",
  "soyadi": "Aydın",
  "getFullName": function() {
    return person.adi + " " + person.soyadi;
  },
  "address":{
    "street": "123 JS Street",
    "city": "JS",
    "state": "CA"
  },
  "isFromState": function(state){
    return (this.address.state === state);
    /*if(this.address.state === state)
      return true;
    else
      return false;*/
  }
};

var fullName = person.getFullName();
console.log(fullName);

console.log(person.isFromState("CA"));
console.log(person.isFromState("ABC"));
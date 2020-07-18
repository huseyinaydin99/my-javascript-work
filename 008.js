function merhaba(name,selam){
  console.log("merhaba " + name + " " + selam);
}

function merhaba2(name,selam){
  return "merhaba " + name + " " + selam;
}


merhaba("Hüseyin","Selamun aleyküm");
merhaba("Hüseyin");

var returnValues = merhaba2("Hüseyin","Selamun aleyküm");
console.log(returnValues);
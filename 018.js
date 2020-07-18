var a = 10;

function outer(){
  var b = a;
  console.log(b);
  function inner(){
    var c = b; //iç fonksiyon üst fonksiyonun değişkenine erişemez!
    console.log(c);
    var b = 20;
  }
  inner();
}

outer();

console.log(x);//hatalı undefined çıkar
var x = 10;
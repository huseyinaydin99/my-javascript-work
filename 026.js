function foo(){
  console.log("merhaba");
  console.log(this);
}

foo(); //böyle çalıştırırsak window nesnesi üzerinde çalışır
new foo(); //böyle çalıştırırsak kendi nesnesi üzerinde çalışır

console.log(foo.prototype); //prototipini verir yani nesnesini

var myObj = new foo();
console.log("---");
console.log(myObj.prototype);

if(myObj.__proto__ === foo.prototype) //myObj'nin proto'suyla foo'nun prototype'ını karşılaştırdık aynı çıktı çünkü özleri aynı
  console.log("evet eşit")
else
  console.log("hayır değil");
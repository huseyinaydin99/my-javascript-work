function bisikletiOlustur(direksiyon,vites,zincir){
  var bisiklet = {}
  bisiklet.direksiyon = direksiyon;
  bisiklet.vites = vites;
  bisiklet.zincir = zincir;
  return bisiklet;
}

function Bisiklet(direksiyon,vites,zincir){ //böyle de çalışır
  this.direksiyon = direksiyon;
  this.vites = vites;
  this.zincir = zincir;
}

var bisiklet = new Bisiklet(1,18,1); //new anahtar sözüğü constructor(hazırlayıcı fonksiyonu çağırır ve nesne oluşur)
console.log(bisiklet);

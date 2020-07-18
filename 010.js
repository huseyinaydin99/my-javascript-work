var f = function(){
  console.log("merhaba");
};

var executor = function(fn){
  console.log(fn);
}

executor(f); // fonksiyon f'yi verir
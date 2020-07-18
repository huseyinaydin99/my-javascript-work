var a = 20;
function outer(){
  var b = 10;
  var inner = function(){
    a++;
    b++;
    console.log(a);
    console.log(b); //dıştaki fonksiyona erişiliyormuş!
  };
  return inner;
};

var innerFnc = outer();
innerFnc();

var innerFnc2 = outer();
innerFnc2();
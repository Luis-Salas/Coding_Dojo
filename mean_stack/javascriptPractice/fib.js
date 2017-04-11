function fib(num){
  var prev = 1;
  var runner = 1;
  function nacci(){
    var temp = prev
    prev = runner
    runner += temp
    console.log(runner)

  }
    return nacci
}
var fibCounter = fib();
fibCounter()
fibCounter()
fibCounter()
fibCounter()

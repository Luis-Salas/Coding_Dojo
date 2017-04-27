//with the given array find the average value
function findAvg(){
var arr = [3,10,6,19,23]
var sum = 0
var avg = 0
  for(var i =0;i < arr.length;i++){
  sum += arr[i]
  }
  avg = sum/arr.length
  console.log(avg)
}
findAvg()

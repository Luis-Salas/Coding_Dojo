//given array find the max value inside an array
var arr = [3,10,-11,22,1,4]
var max = arr[0]

for(var i =0;i < arr.length;i++){
  if(arr[i] > max){
    max = arr[i]
  }
}
console.log(max)

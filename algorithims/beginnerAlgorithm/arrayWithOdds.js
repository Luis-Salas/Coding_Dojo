//given an array push only the odd values into a new array and print them out
var arr = [1,3,41,52,4,10]
var newArr = []
for(var i=0;i<arr.length;i++){
  if(arr[i] % 2 != 0){
    newArr.push(arr[i])
  }
}
console.log(newArr)

//given an array create a function that returns the number of values greater than Y
function greaterThanY(){
var y = 12
var values = 0
var arr = [1,4,2,12,54,13,65,3]
  for(var i=0; i<arr.length ;i++){
    if(arr[i] > y){
      console.log(arr[i])
      values += 1
    }
    console.log(values)
    return values
  }
}

var data = greaterThanY()
console.log(data,'test')

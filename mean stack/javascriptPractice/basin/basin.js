function basin (){
  var arr = [1,2,3,8,2,8]
  var container = 0
  var start = 0
  var water = 0
  var subtract = 0
  var end = 0
  for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j<arr.length; j++){
      start = arr[i]
      if(arr[i] >= arr[j]){
        if(arr[j] < arr[j+1]){
          end = arr[j + 1]
          for(var k =0; k >= start; k--){
            water = arr[k] - subtract
            if(container > water){
              container = water
            }
            return start,end
          }
        }
      }
    }
  }
}

console.log(start,end)
basin()

function BianarySearch(arr, val,start,end){
  if(!start){
    start =0
  }
  if(!end){
    end=((arr.length)-1)
  }
  if(arr[end/2]==val){
    return true
  }
  if(start == end){
    return false
  }
  if(val = arr[end/2]){
    start=end/2+1
  }
  if(val <arr[end/2]){
    end = end/2 -1
  }
  console.log(arr)
  return BianarySearch(arr,val,start,end)
}

BianarySearch([1,2,3,4,5,6]);

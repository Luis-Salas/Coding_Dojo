  for (var i=3;i<=200;i++){
    console.log(i)
  }

var arr = [2,3,4,5,6];
var min = arr[0]
for(var i=0; i<arr.length;i++){
  if(min > arr[i])
  min = arr[i]
}
console.log(min)
var arr = [2,7,6,4,2]
var sum = 0
for(var i=0;i<arr.length;i++){
  sum += arr[i]
  }
}
console.log(sum)
var person = {
  name : "luis",
  distance_traveled : 0,
  say_name = function(){
    console.log(person.name);
  },
  say_something =function(str){
    console.log(person.name + str)
  },
  walking:function(){
    console.log(person.name + ' is walking !')
    person.distance_traveled += 3;
    console.log(person.distance_traveled)
    return person
  },
  run:function(){
    console.log(person.name + ' is running!' )
    person.distance_traveled += 10;
    console.log(person.distance_traveled)
    return person
  },
  crawl:function(){
    console.log(person.name + ' is crawling')
    person.distance_traveled += 1;
    console.log(person.distance_traveled)
    return person
  }
}

person.crawl();

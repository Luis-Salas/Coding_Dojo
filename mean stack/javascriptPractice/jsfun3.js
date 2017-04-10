function HumanConstructor(name){
var person = {
  name: name,
  distance_traveled : 0,
  };
  say_name  =  function(){
    console.log(person.name);
  },
  // say_something = function(){
  //   console.log(person.name +)
  // },
  walking = function(){
    console.log(person.name + ' is walking !')
    person.distance_traveled += 3;
    console.log(person.distance_traveled)
    return person
  },
  run = function(){
    console.log(person.name + ' is running!' )
    person.distance_traveled += 10;
    console.log(person.distance_traveled)
    return person
  },
  crawl = function(){
    console.log(person.name + ' is crawling')
    person.distance_traveled += 1;
    console.log(person.distance_traveled)
    return person
  }
}
// HumanConstructor('luis')
// run()

function NinjaContructor(name,cohort){
  var ninja ={
    name : name,
    cohort : cohort,
    belt : "yellow",
  };
  levelUp = function(){
    if(ninja.belt == "yellow"){
      ninja.belt = "red"
    }
    if(ninja.belt == "red"){
      ninja.belt = "black"
    }
    else{
      console.log('sorry you cant level up anymore')
    }
    console.log(ninja.belt)
  }
}

NinjaContructor('luis','cohort')
levelUp()

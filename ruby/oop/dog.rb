class Dog
  def initialize
    @health = 150
  end
  def walk
    @health -= 1
    puts "you walked and your health is now #{@health}"
    return self
  end
  def pet
    @health += 5
    puts "your where pet and your health is now #{@health}"
    return self
  end
  def run
    @health -= 10
    puts "you ran and your health is now #{@health}"
    return self
  end

end
instace = Dog.new
instace2 = Dog.new

instace.pet.walk.run
instace2.pet.pet.pet.pet

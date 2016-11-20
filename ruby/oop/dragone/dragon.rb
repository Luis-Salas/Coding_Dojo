require_relative 'Mammal'
class Dragon < Mammal
  def initialize
    @health = 170
  end
  def fly
    @health -= 10
    puts "you flew and lost 10 health your health now is #{@health}"
    return self
  end
  def attackTown
    @health -= 50
    puts "you attacked to local town and lost 50 health. your health is now #{@health}"
    return self
  end
  def eat_humans
    @health += 20
    puts "you ate a delicious human and replinished 20 health your health is now #{@health}"
    return self
  end
  def DisplayHealth
    puts "this is dragon"
  end

end

instance1 = Dragon.new

instance1.fly.attackTown.eat_humans.DisplayHealth

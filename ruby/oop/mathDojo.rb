class Math
  attr_accessor :add
  def initialize(num)
    @add = num
  end
  def addition
    puts "adding #{@num}"
  end
end
number = Math.new(3)
number.addition

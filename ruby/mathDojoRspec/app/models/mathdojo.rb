class Mathdojo
 attr_accessor :result
 def initialize
  @result = 0
 end
 def add *numbers
  @result += numbers.flatten.inject(:+)
  return self
 end
 def subtract *numbers
  @result -= numbers.flatten.inject(:+)
  return self
 end
 def multiply *numbers
   puts '_-----------------------------'*10
   puts numbers
   @result *= numbers.flatten.inject(:+)
   puts @result
   return self
 end
end

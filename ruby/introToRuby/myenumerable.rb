module MyEnumerable
  def my_each
    [1,2,3,4].my_each { |i| puts i } #prints 1 2 3 4 in the terminalend
    #your code here!
  end
end
class Array
   include MyEnumerable

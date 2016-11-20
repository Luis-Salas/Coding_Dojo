# def array
#   x = [3,5,1,2,7,9,8,13,25,32]
#   puts x.reject { |number| number < 10 }
# end
# array
#
# def person
#   people = ["John", "KB", "Oliver", "Cory", "Matthew"]
#   puts people.shuffle
# end
# person

# def letters
#   letter = Array("a".."z")
#   puts letter.first
#   puts letter.last
#   puts "_____________"
#   puts letter.shuffle
#   if letter.first == "a" "e" "i" "o" "u"
#     puts "heeyy"
#   end
# end
#
# letters
# def random
#   random_array = Array.new
#   10.times { random_array.push(rand(55..100)) }
#   print random_array
# end
# random
def string
  string_array = Array.new
  10.times { string_array.push((1..5).map{ rand(65..90).chr }.join) }
  puts string_array
end

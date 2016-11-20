a = ["a","c","d","e", "luis"]
b = ["stuff", "more stuff","other things"]
c = [" dojo", 9]
puts a
puts '_________'
puts a.fetch(3)
a.delete('luis')
puts b.reverse
puts a.length + 10
a.sort
puts a[2..4]
puts a.shuffle
puts a.join('+')
puts a.insert(1, "hello")
puts b.values_at(0,2)

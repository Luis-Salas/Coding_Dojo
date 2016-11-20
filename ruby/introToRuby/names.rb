a = {:first_name => "luis", :last_name => "salas"}
b = {:first_name => "ninja", :last_name => "duck"}
c = {:first_name => "other", :last_name => "ninja"}
d = {:first_name => "doggo", :last_name => "bork"}

names = [a, b, c, d]

# for i in 0..names.length-1
#   puts a[:first_name], a[:last_name]
#   puts b[:first_name], b[:last_name]
#   puts c[:first_name], c[:last_name]
#   puts d[:first_ndme], d[:last_name]
# end
#
puts  names.count.to_s
names.each { |name|
	puts "The name is "	+ name.values.join(" ")
}

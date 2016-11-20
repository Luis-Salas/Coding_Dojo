class User
  attr_accessor :first_name, :last_name
  def initialize(f_name, l_name)
    @first_name = f_name
    @last_
    name = l_name
  end
  def my_name
    puts "I am #{@first_name}"
  end
end
steph = User.new("Stephen", "Curry")
steph.my_name # prints 'I am Stephen'

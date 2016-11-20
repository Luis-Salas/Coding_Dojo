class Project
  attr_accessor :project1, :Description1
  def initialize(pro, desc)
    @project1 = pro
    @Description1 = desc
  end
  def elevator_pitch
    puts "My project is #{@project1} and we #{@Description1}"
  end
end
project1 = Project.new("stuff", "do stuff")
project1.elevator_pitch

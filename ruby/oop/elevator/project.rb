class Project
  @@team_members = 0
  attr_accessor :name
  attr_accessor :description

  def initialize(name, description)
    @name = name
    @description = description
  end

  def elevator_pitch
    "#{@name} #{@description}"
  end

  def add_to_team
  	@@team_members += 1
  end
end

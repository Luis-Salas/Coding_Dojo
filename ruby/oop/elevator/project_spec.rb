require_relative 'project'

RSpec.describe Project do
  it 'should have a getter and a setter for the name attribute' do
    project = Project.new('Name', 'Description')
    project.name = 'Project name'
    expect(project.name).to eq('Project name')
  end

  it 'should have a getter and a setter for description attribute' do
    project = Project.new('Name', 'Description')
    project.description = 'I am a project'
    expect(project.description).to eq('I am a project')
  end

  it 'has an initializer with arguments for name and description' do
    project = Project.new('Name', 'Description')
    expect(project.name).to eq('Name')
    expect(project.description).to eq('Description')
  end

  it 'has a method elevator_pitch to explain name and description' do
    project1 = Project.new('Project 1', 'description 1')
    project2 = Project.new('Project 2', 'description 2')
    expect(project1.elevator_pitch).to eq("Project 1 description 1")
    expect(project2.elevator_pitch).to eq("Project 2 description 2")
  end

  it 'has a method add_to_team that adds a new team_member' do
    project3 = Project.new('Project 3', 'description 3')
    expect(project3.add_to_team).to eq(1)
  end
end

class SurveyController < ApplicationController
  def index
    render 'index'
  end
  def create
    puts(params[:stuff])
    @survey = Question.create(name:params[:name], location:params[:location], language:params[:language])
    @test =  params["stuff"]
    render "result"
  end
end

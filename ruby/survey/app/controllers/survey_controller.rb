class SurveyController < ApplicationController
  def index
    render 'index'
  end
  def create
    @survey = Question.create(name:params[:name], location:params[:location], language:params[:language])
    puts @survey["name"]
    render "result"
  end
end

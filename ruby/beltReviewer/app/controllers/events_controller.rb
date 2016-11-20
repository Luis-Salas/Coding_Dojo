class EventsController < ApplicationController
  def index
    @user = User.find(session["id"])
    @local = Event.where(location:"Chicago")
    @other = Event.where.not(location:"Chicago")
    puts 'EYYYY'*20
    puts @local
    render 'events'
  end
  def create
    puts "IM HEREE"*20
    event = Event.create(name:params[:name], date:params[:date], location:params[:location])
    redirect_to "/events"
  end
end

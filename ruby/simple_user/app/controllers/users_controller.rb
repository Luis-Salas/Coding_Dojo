class UsersController < ApplicationController
  def index
    @bananas = User.all
    render "index"
  end
  def new
    render "new"
  end
  def create
    @user = User.create(name:params[:name])
    puts @user
    puts params[:name]
    puts "hello"
    redirect_to "/users"
  end
  def show
    @apples = User.find(1)
    render "show"
  end
end

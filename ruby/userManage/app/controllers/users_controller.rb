class UsersController < ApplicationController
  def index
    @users = User.all
  end
  def new
    render "create"
  end
  def create
    @user = User.create(first_name:params[:first], last_name:params[:last], email_address:params[:email], password:params[:pass])
    redirect_to "/"
  end
  def show
     @show = User.find(params[:id])
     puts @show
     render "show"
  end

  def edit
    render "edit"
  end

  def update
    puts params[:id]
    @edit = User.update(params[:id], first_name:params[:first], last_name:params[:last], email_address:params[:email], password:params[:pass])
    redirect_to "/"
  end
  def destroy
    User.delete(params[:id])
    redirect_to "/"
  end
end

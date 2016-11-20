class UsersController < ApplicationController
  def index
  end

  def create
    user = User.create(first_name:params[:first_name], last_name:params[:last_name], email:params[:email], location:params[:location], password:params[:password], password_confirmation:params[:password_confirmation])
    redirect_to "/users"
  end
  def login
    user = User.find_by_email(params[:mail])
    if user && params[:pass] == user[:password]
      session["id"] = user[:id]
      redirect_to "/events"
    else
      redirect_to "/"
    end
  end
end

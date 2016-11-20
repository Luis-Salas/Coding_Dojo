class UsersController < ApplicationController
  def index
  end

  def create
    puts params
    user = User.create(email:params[:email], password:params[:password],name:params[:name])
    last_user = User.last
    if user.errors.full_messages.empty?
      puts "NICEE"
    redirect_to "/users/#{last_user.id}"
    else
      flash[:errors] = user.errors.full_messages
      redirect_to "/users/new"
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    render "new"
  end

  def login
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session["id"] = user['id']
      redirect_to "/show/#{session['id']}"
    else
      flash[:errors] = ["Invalid combination"]
      redirect_to "/"
    end
  end

  def edit
    puts 'MADE IT HEREERERE'*20
    @user = User.find(params[:id])
    render "edit"
  end

  def update
    puts '_________'
    user = User.update(params[:id], name:params[:name], email:params[:email])
    redirect_to "/users/edit/#{params[:id]}"
  end

  def destroy
    User.delete(params[:id])
    redirect_to"/users/new"
  end

  def secret
    puts session["id"]
    Secret.create(content:params[:secret], user_id:session["id"])
    redirect_to '/allSecrets'
  end

  def allSecrets
    @secret = Secret.all
    render "secret"
  end

end

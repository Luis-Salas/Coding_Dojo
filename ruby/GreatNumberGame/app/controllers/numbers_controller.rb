class NumbersController < ApplicationController
  def index
    if !session["number"]
      session["number"]= rand(1..100)
    end
    @num = session["number"]
    puts @num
  end
  def result
    flash[:valid] = false
    # puts params[:number].to_i
    if params[:number].to_i == session["number"]
      flash[:message] = 'You got it! play again?'
      flash[:valid] = true
    end
    if params[:number].to_i < session["number"]
      flash[:message] = "the number is to low"
    end
    if params[:number].to_i > session["number"]
      flash[:message] = "the number is to high"
    end
    redirect_to  "/"
  end
  def reset
    session.clear
    redirect_to "/"
  end
end

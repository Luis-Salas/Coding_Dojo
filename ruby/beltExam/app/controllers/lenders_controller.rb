class LendersController < ApplicationController
  def create
    lender = Lender.create(first_name:params[:first_name], last_name:params[:last_name], email:params[:email], password:params[:password], money:params[:money])
    if lender.errors.full_messages.empty?
    puts lender
    else
      flash[:errors] = lender.errors.full_messages
    end
    redirect_to "/"
  end
  def lend
    lender = Lender.find(session[:id])
    money_lent = lender.money.to_i - params[:money].to_i
    lend = Record.create(amount:params[:money], lender_id:session["id"], borrower_id:params[:id])
    lender.update(money:money_lent)
    redirect_to '/lender/dashboard'
  end
end

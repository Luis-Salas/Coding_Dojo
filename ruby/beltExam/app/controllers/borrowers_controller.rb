class BorrowersController < ApplicationController
  def create
    puts 'HEREE'*30
    borrower = Borrower.create(first_name:params[:first_name], last_name:params[:last_name], email:params[:email], password:params[:password], reason:params[:reason], description:params[:description], amount:params[:amount], money: 0)
    if borrower.errors.full_messages.empty?
    puts borrower
    else
      flash[:errors] = borrower.errors.full_messages
    end
    redirect_to "/"
  end
end

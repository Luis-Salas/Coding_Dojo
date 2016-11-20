class BeltsController < ApplicationController
  def index
  end
  def login
    render 'login'
  end
  def show
    lender = Lender.find_by_email(params[:mail])
    if lender && params[:pass] == lender[:password]
      session["id"] = lender[:id]
      redirect_to "/lender/dashboard" and return
    end
    borrower = Borrower.find_by_email(params[:mail])
    if borrower && params[:pass] == borrower[:password]
      session["id"] = borrower[:id]
      redirect_to "/borrower/dashboard" and return
    else
      flash[:errors] = ["invalid combination"]
      redirect_to "/login" and return
    end
  end
  def lenderDash
    @lender = Lender.find(session["id"])
    @all = Borrower.all
    @just = Record.where(lender_id:session["id"])
    render "lenderDash"
  end

  def borrowerDash
    @lent = Record.where(borrower_id:session["id"])
    @amount_raised = Record.where(borrower_id:session["id"])
    count = 0
    @total = 0
    @amount_raised.each do |go|
      puts @total += @amount_raised[count][:amount]
      count += 1
    end
    @borrower = Borrower.find(session["id"])
    render "borrowerDash"
  end
end

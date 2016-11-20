class Borrower < ActiveRecord::Base
  validates :first_name, :presence => true
  validates :last_name, :presence => true
  validates :email, :presence => true
  validates :password, :presence => true
  validates :money, :presence => true
  validates :reason, :presence => true
  validates :description, :presence => true
  validates :amount, :presence => true
end

class BankAccount
  attr_accessor :account_number, :checking_balance, :savings_balance
    def initialize
		createAccountNumber
		@checking_balance = 5000
	end
  def checkingAccountBalance
		puts "Your Checking Account balance is: #{@checking_balance}"
	end
 def accountNum
  private_m
 end
 private
 def private_m
  puts (0..5).map {(65+rand(26))}.join()
 end
end

BankAccount.new.checkingAccountBalance

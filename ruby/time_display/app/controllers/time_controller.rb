class TimeController < ApplicationController
  def index
  	# @time = Time.new
    @t = Time.now
    @t.strftime("%I:%M%p")
    puts t
  end
end

class WordController < ApplicationController
  def index
    if session["counter"]
      session["counter"]+=1
    else
      session["counter"]=1
    end
    @count  = session["counter"]
    @random = (0...20).map { ('a'..'z').to_a[rand(26)] }.join
    puts @random
    render "index"

  end
end

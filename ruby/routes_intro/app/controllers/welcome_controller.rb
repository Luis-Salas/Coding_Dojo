class WelcomeController < ApplicationController
  def index
    render "index"
  end
  def hello
    render "hello"
  end
  def say
    render "sayhello"
  end
  def joe
    render "joe"
  end
  def times
    if session["times"]
      session["times"]+=1
    else
      session["times"]=1
    end
    render "counter"
  end
  def restart
    session.clear
    render "counter"
  end
end

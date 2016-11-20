class RpgController < ApplicationController
  def index
    if !session["messages"]
      session["messages"] = []
    end
    if !session["gold"]
      session["gold"] = 0
    end
  @money = session["gold"]
  end

  def farm
    income = rand(10..20)
    session["gold"] += income
    session["messages"].push("you went to a farm and found #{income} gold")

  redirect_to "/"
  end

  def cave
    income = rand(5..10)
    session["gold"] += income
    session["messages"].push("you went to a cave and found #{income} gold")
  redirect_to "/"
  end

  def house
    income = rand(2..5)
    session["gold"] += income
    session["messages"].push("you went to a house and found #{income} gold")
  redirect_to "/"
  end

  def casino
    income = rand(-50..50)
    session["gold"] += income
    session["messages"].push("you went to a casino and lost/found #{income} gold")
  redirect_to "/"
  end
end

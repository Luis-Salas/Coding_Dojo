class IndexController < ApplicationController
  def counter
    if !session["counter"]
      session["counter"] = 0
    end
    session["counter"] += 1
    puts session["counter"]
  end
end

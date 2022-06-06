class GreetingsController < ApplicationController
  def show
    @greeting = Greeting.find_by(id: rand 1..Greeting.count)
  end
end

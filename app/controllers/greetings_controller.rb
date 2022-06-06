class GreetingsController < ApplicationController
  def show
    random_id = rand 1..Greeting.count
    @greeting = Greeting.find( random_id )
  end
end

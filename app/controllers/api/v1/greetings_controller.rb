module Api
    module V1
        class GreetingsController < ApplicationController
        def show
            random_id = rand 1..Greeting.count
            @greeting = Greeting.find( random_id )
             render json: { status: 'SUCCESS', message: 'rendered successfully', data:@greeting }, status: :ok  # 200
        end
        end
    end
    end
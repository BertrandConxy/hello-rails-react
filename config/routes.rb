Rails.application.routes.draw do
  root "static#index"
  namespace :api do
    namespace :v1 do
      get 'greetings', to: 'greetings#show'
    end
  end
end

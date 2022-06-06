Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'greetings', to: 'greetings#show'
    end
  end
  root 'greetings#show'
  # root "articles#index"
end

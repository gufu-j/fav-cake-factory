Rails.application.routes.draw do
  
  resources :cakes, only: [:index, :show, :create]
  resources :reviews, only: [:index, :show, :create, :destroy, :update]


  # this route is to practice for the assesment.
  # resources :practicecakes, only: [:index, :show]

  # get '/cakes', to: 'cakes#index'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"

  # get "practicecakes", to: "practices#index"

  

  
end

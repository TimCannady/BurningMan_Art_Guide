Rails.application.routes.draw do

# from Adam's tutorial
 # ACCEPTS_JSON = lambda {|request|
 #    request.accepts.include?(:json)
 #  }

 #  scope constraints: ACCEPTS_JSON do
 #    resource :users
 #  end

  get 'installations', to: "installation#index"

  get 'installations/:id', to: "installation#show"

  post 'tours', to: "tours#create"
  post 'tours', to: "tours#create"

  get 'tours/:id', to: "tours#show"

  root "installations#index"
end

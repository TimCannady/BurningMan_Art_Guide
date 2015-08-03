Rails.application.routes.draw do

  get 'tour/show'

# from Adam's tutorial
 ACCEPTS_JSON = lambda {|request|
    request.accepts.include?(:json)
  }

  scope constraints: ACCEPTS_JSON do
    resource :users
  end

  get 'installations', to: "installations#index"

  get 'installations/:id', to: "installations#show"

  root "installations#index"
end

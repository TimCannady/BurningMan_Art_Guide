Rails.application.routes.draw do

# from Adam's tutorial
 ACCEPTS_JSON = lambda {|request|
    request.accepts.include?(:json)
  }

  scope constraints: ACCEPTS_JSON do
    resource :users
  end

  get 'art_installations', to: "art_installations#index"

  get 'art_installations/:id', to: "art_installations#show"

  root "art_installations#index"
end

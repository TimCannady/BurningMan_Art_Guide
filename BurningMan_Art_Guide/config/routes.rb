Rails.application.routes.draw do

  ACCEPTS_JSON = lambda {|request|
    request.accepts.include?(:json)
  }

  scope constraints: ACCEPTS_JSON do
    resources :tours
    resources :installations, only: [:index]
  end

  get '*path', to: "client_app#show"

  root to: "client_app#show"
end

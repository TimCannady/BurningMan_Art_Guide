Rails.application.routes.draw do


  get 'tacos/show' to: 'tacos#show'

  get 'art_installations', to: "art_installations#index"

  get 'art_installations/:id', to: "art_installations#show"

  root "art_installations#index"
end

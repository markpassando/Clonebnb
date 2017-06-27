Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :rooms, only: [:index, :show, :create]
    resources :trips, only: [:index, :show, :create, :destroy]
    resources :reviews, only: [:index, :show, :create]
  end
end

Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resources :playlists, only: [:index, :show, :create, :update, :destroy] do
      resources :tracks, only: [:create, :destroy]
    end
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :tracks, only: [:index, :show]
  end 

  root to: 'static_pages#root'
end
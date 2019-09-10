Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :playlists, only: [:index, :show, :create, :update, :destroy]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :tracks, only: [:index, :show]
    resources :playlist_tracks, only: [:index, :show, :create, :destroy]
  end 

  root to: 'static_pages#root'
end
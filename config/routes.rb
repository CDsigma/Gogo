Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :destroy, :edit, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :campaigns, only: [:create, :update, :edit, :index, :show]
  end
  
  root to: 'static_pages#root'
end

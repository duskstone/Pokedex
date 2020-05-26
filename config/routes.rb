Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  # https://pokedex/api/pokemon <= index / create url
  # https://pokedex/api/pokemon/2 <= show

  namespace :api, defaults: { format: :json } do 
    resources :pokemon, only: [:create, :index, :show]
  end 
end
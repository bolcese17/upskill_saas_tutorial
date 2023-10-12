Rails.application.routes.draw do
  get 'homes/show'
  
  root to: 'pages#home'
  get 'about', to: 'pages#about'
  get 'past_work', to: 'pages#past_work'
  get 'achievements', to: 'pages#achievements'
  get 'resume', to: 'pages#resume'
  resources :contacts

  resources :homes, only: [:show]
end


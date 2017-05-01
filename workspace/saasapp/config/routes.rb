Rails.application.routes.draw do
    root to: 'pages#home'
    get 'about', to: 'pages#about'
    get 'past_work', to: 'pages#past_work'
    get 'achievements', to: 'pages#achievements'
    
end

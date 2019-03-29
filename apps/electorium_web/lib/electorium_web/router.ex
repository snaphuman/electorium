defmodule ElectoriumWeb.Router do
  use ElectoriumWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug ElectoriumWeb.Auth
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
    plug ElectoriumWeb.Auth
  end

  scope "/", ElectoriumWeb do
    pipe_through :browser

    get "/", PageController, :index

    # User management
    resources "/users", UserController, only: [:index, :show, :new, :create]
    resources "/sessions", SessionController, only: [:new, :create, :delete]
  end
end

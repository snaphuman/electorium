defmodule ElectoriumWeb.Router do
  use ElectoriumWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", ElectoriumWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  scope "/api/v1", ElectoriumWeb do
    pipe_through :api

    get "/students", StudentController, :index
    post "/students", StudentController, :create
    post "/candidates", CandidateController, :create
  end

  # Other scopes may use custom stacks.
  # scope "/api", ElectoriumWeb do
  #   pipe_through :api
  # end
end

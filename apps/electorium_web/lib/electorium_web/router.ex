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
    plug CORSPlug, origin: "http://localhost:4000"
    plug :accepts, ["json"]
  end

  scope "/", ElectoriumWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  scope "/api/v1", ElectoriumWeb do
    pipe_through :api

    options "/candidates", CandidateController, :options
    post "/candidates", CandidateController, :create

    options "/students", StudentController, :options
    get "/students", StudentController, :index
    post "/students", StudentController, :create
    get "/students/:pubkey", StudentController, :show
  end
end

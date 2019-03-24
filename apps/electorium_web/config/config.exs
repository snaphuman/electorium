# Since configuration is shared in umbrella projects, this file
# should only configure the :electorium_web application itself
# and only for organization purposes. All other config goes to
# the umbrella root.
use Mix.Config

# General application configuration
config :electorium_web,
  ecto_repos: [Electorium.Repo],
  generators: [context_app: :electorium]

# Configures the endpoint
config :electorium_web, ElectoriumWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "6EUDnd0bXjCOL2Raa72wA/TumutiM0kMrecvCBPDenfZztgBDOKyt/G848o9/NgJ",
  render_errors: [view: ElectoriumWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: ElectoriumWeb.PubSub, adapter: Phoenix.PubSub.PG2]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"

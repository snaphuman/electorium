# Since configuration is shared in umbrella projects, this file
# should only configure the :electorium application itself
# and only for organization purposes. All other config goes to
# the umbrella root.
use Mix.Config

# Configure your database
config :electorium, Electorium.Repo,
  username: "postgres",
  password: "postgres",
  database: "electorium_dev",
  hostname: "localhost",
  pool_size: 10

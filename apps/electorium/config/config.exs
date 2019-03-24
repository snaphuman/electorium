# Since configuration is shared in umbrella projects, this file
# should only configure the :electorium application itself
# and only for organization purposes. All other config goes to
# the umbrella root.
use Mix.Config

config :electorium,
  ecto_repos: [Electorium.Repo]

import_config "#{Mix.env()}.exs"

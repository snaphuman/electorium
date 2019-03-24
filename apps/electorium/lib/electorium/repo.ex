defmodule Electorium.Repo do
  use Ecto.Repo,
    otp_app: :electorium,
    adapter: Ecto.Adapters.Postgres
end

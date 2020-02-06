defmodule Electorium.Vote.Student do
  use Ecto.Schema
  import Ecto.Changeset


  schema "students" do
    field :publicKey, :string
    field :secretKey, :string
    field :name, :string
    field :last_name, :string
    field :email, :string
    field :course, :string
    field :isCandidate, :boolean

    timestamps()
  end

  @doc false
  def changeset(student, attrs \\ %{}) do
    student
    |> cast(attrs, [:publicKey,
                   :privateKey,
                   :name,
                   :last_name,
                   :email,
                   :course,
                   :isCandidate])
    |> validate_required([:name,
                         :email,
                         :publicKey,
                         :secretKey])
  end
end

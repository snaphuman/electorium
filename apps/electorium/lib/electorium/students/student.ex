defmodule Electorium.Students.Student do
  use Ecto.Schema
  import Ecto.Changeset

  alias Electorium.Students.Candidate

  @derive {Jason.Encoder, only: [:name,
                                 :last_name,
                                 :email,
                                 :course,
                                 :isCandidate,
                                 :publicKey
                                ]}

  schema "students" do
    field :publicKey, :string
    field :secretKey, :string
    field :name, :string
    field :last_name, :string
    field :email, :string
    field :course, :string
    field :isCandidate, :boolean
    has_one :candidate, Candidate

    timestamps()
  end

  @doc false
  def changeset(student, attrs \\ %{}) do
    student
    |> cast(attrs, [:publicKey,
                   :secretKey,
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

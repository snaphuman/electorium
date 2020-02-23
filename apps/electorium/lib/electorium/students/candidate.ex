defmodule Electorium.Students.Candidate do
  use Ecto.Schema
  import Ecto.Changeset

  alias Electorium.Students.Student

  @derive {Jason.Encoder, only: [:nomination,
                                 :proposal,
                                 :photo
                                ]}

  schema "candidates" do
    field :nomination, :string
    field :proposal, :string
    field :photo, :string
    belongs_to :student, Student

    timestamps()
  end

  @doc false
  def changeset(candidate, attrs \\ %{}) do
    candidate
    |> cast(attrs, [:nomination,
                   :proposal,
                   :photo])
    |> validate_required([:nomination,
                         :proposal,
                         :photo])
    |> unique_constraint(:student_id)
  end
end

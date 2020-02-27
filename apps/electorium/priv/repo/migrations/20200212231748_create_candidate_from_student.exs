defmodule Electorium.Repo.Migrations.CreateCandidateFromStudent do
  use Ecto.Migration

  def change do

    create table(:candidates) do
      add :nomination, :string
      add :proposal, :string
      add :photo, :string
      add :student_id, references(:students)

      timestamps()
    end

    create unique_index(:candidates, [:student_id])
  end
end

defmodule Electorium.Repo.Migrations.CreateStudents do
  use Ecto.Migration

  def change do
    create table(:students) do
      add :publicKey, :string
      add :secretKey, :string
      add :name, :string
      add :last_name, :string
      add :email, :string
      add :course, :string
      add :isCandidate, :boolean

      timestamps()
    end

  end
end

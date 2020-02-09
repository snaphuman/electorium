defmodule ElectoriumWeb.StudentController do
  use ElectoriumWeb, :controller

  alias Electorium.Students.Student

  def create(conn, params) do

    changeset = Student.changeset(%Student{}, params)

    case Repo.insert(changeset) do
      {:ok, student} ->
        json conn |> put_status(:created), student
      {:error, _changeset} ->
        json conn |> put_status(:bad_request), %{errors: ["Unable to create student"]}
    end
  end

  def index(conn, _params) do

    students = Repo.all(Student)
    json conn, students
  end

end

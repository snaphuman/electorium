defmodule ElectoriumWeb.StudentController do
  use ElectoriumWeb, :controller

  alias Electorium.Students
  alias Electorium.Students.Student

  def options(conn, _params) do
    json(conn, [])
  end

  def show(conn, %{"pubkey" => student_pkey}) do
    student = Students.get_student_by_pubkey!(student_pkey)
    json(conn, student)
  end

  def create(conn, params) do
    case Students.create_student(params) do
      {:ok, student} ->
        conn
        |> put_status(:created)
        |> json(student)

      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> put_status(:bad_request)
        |> json(%{errors: ["Unable to create student"]})
    end
  end

  def index(conn, _params) do
    students = Repo.all(Student)
    json(conn, students)
  end
end

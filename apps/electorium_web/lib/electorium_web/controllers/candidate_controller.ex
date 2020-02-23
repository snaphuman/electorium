defmodule ElectoriumWeb.CandidateController do
  use ElectoriumWeb, :controller

  alias Electorium.Students.{Student, Candidate}

  def create(conn, params) do

    candidate_params = Map.take(params, ["proposal", "nomination", "photo"])

    student =
      case get_student(params["email"]) do
      {:ok, student} ->
        student
        |> Ecto.build_assoc(:candidate)
        |> Candidate.changeset(candidate_params)

    end

    IO.inspect(student)

    case Repo.insert(student) do
      {:ok, candidate}  ->
        json conn
        |> put_status(:ok), candidate
      {:error, _result} ->
        json conn
        |> put_status(:bad_request),
           %{errors: ["Unable to create candidate"]}
    end

  end

  defp get_student(email) do

    case Repo.get_by(Student, email: email) do
      student ->
        {:ok, student}
    end
  end

end

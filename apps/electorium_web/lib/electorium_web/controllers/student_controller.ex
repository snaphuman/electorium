defmodule ElectoriumWeb.StudentController do
  use ElectoriumWeb, :controller

  def create(conn, params) do
    IO.puts "++++"
    IO.inspect conn
    IO.puts "++++"
    IO.inspect params
  end
end

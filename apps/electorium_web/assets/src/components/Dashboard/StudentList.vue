<template>
  <div class="box">
    <h2 class="title">Lista estudiantes</h2>
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="student.publicKey" v-for="student in students">
            <td>{{ student.name }}</td>
            <td>{{ student.lastname }}</td>
            <td>{{ student.email }}</td>
            <td><a class="button is-info">Ver</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="@/services/StudentList.js" />

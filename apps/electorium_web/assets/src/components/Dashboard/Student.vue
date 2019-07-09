<template>
  <section class="container is-fluid">
    <h1 class="title">Gestionar de estudiantes</h1>
    <div class="tabs">
      <ul>
        <li><router-link to="/dashboard/student/list">Ver</router-link></li>
        <li><router-link to="/dashboard/student/edit">Editar</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </section>
</template>

<template>
  <section class="container is-fluid">
    <h1 class="title">Perfil del colegio</h1>
    <div class="tabs">
      <ul>
        <li><router-link to="/dashboard/school">Ver</router-link></li>
        <li><router-link to="/dashboard/school/edit">Editar</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </section>
</template>

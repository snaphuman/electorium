<template>
  <section class="container is-fluid">
    <div class="tabs">
      <ul>
        <li><router-link to="/dashboard/school">Perfil</router-link></li>
        <li><router-link to="/dashboard/school/edit">Editar</router-link></li>
      </ul>
    </div>
    <div class="container is-fluid">
      <router-view></router-view>
    </div>
  </section>
</template>

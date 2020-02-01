<template>
  <aside class="menu">
    <p class="menu-label">
      Administrar Colegio
    </p>
    <ul class="menu-list">
      <li><router-link to="/dashboard/school">Perfil del colegio</router-link</li>
      <li><router-link to="/dashboard/student/list">Estudiantes</router-link</li>
      <li>Votación</li>
    </ul>
    <p class="menu-label">
      Administrar Contrato
    </p>
    <ul class="menu-list">
      <li>Detalles</li>
      <li>Transacciones</li>
    </ul>
    <p class="menu-label">
      Administrar usuario
    </p>
    <ul class="menu-list">
      <li><router-link to="/dashboard/user">Perfil de usuario</router-link></li>
      <li><router-link to="/dashboard/reset-password">Cambiar contraseña</router-link></li>
    </ul>
  </aside>
</template>

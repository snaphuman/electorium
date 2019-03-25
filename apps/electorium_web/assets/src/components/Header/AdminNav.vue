<template>
  <nav id="admin-nav" class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">ELECTORIUM</router-link>
        <span class="navbar-burguer burguer" data-target="navbar-user-menu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbar-user-menu" class="navbar-menu">
        <div class="navbar-end">
          <span class="navbar-item">
            <router-link to="/dashboard">Dashboard</router-link>
          </span>
          <span class="navbar-item">
            <router-link class="button is-primary" to="/login"><span>Login</span></router-link>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

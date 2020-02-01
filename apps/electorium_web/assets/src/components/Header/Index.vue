<template>
  <section v-if="isRouteName==='Dashboard'" id="header">
    <AdminNav></AdminNav>
  </section>
  <section v-else id="header" class="hero is-primary">
    <div class="hero-head">
      <UserNav></UserNav>
    </div>
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Nombre Colegio</h1>
      </div>
    </div>
    <div class="hero-foot">
      <MainNav></MainNav>
    </div>
  </section>
</template>


<script src="@/services/Header.js" />

<template>
  <section v-if="isRouteName==='Home'" id="header" class="hero is-primary is-medium">
    <div class="hero-head">
      <UserNav></UserNav>
    </div>
    <div class="hero-body">
      <div class="container is-fluid has-text-centered">
        <h1 class="title">Electorium</h1>
        <h2 class="subtitle">A better experience of School Elections with transparency, efficiency and security of blockhain3 in realtime</h2>
      </div>
    </div>
    <div class="hero-foot">
      <MainNav></MainNav>
    </div>
  </section>
  <section v-else id="header">
    <AdminNav></AdminNav>
  </section>
</template>


<script src="@/services/Header.js" />

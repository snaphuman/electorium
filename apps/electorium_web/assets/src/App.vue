<template>
<div id="app">
  <div class="container is-fluid">
    <Header></Header>
  </div>
  <div class="container is-fluid">
    <flash-message class="message"></flash-message>
  </div>
  <div class="container is-fluid">
    <router-view></router-view>
  </div>
</div>
</template>

<script src="./services/App.js" />

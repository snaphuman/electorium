<template>
<div id="login" class="modal is-active">
  <div class="modal-background" @click="close"></div>
  <div class="modal-content">
    <div class="box">
      <h1>Login</h1>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left has-icons-left">
          <input class="input" type="password" placeholder="Password">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field is-grouped">
        <p class="control">
          <a class="button is-primary">Login</a>
        </p>
        <p class="control">
          <a class="button is-light" @click="close">Close</a>
        </p>
      </div>
    </div>
  </div>
  <button class="modal-close is-large" @click="close" aria-label="close"></button>
</div>
</template>

<script src="@/services/Login.js">

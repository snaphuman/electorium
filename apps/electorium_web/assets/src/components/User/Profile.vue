<template>
  <div class="box">
    <h2 class="title">Perfil de usuario</h2>
    <form>
      <div class="field">
        <label class="label">Nombre completo</label>
        <div class="control">
          <input class="input" type="text" placeholder="Ingrese nombres y apellidos" v-model="user.fullName">
        </div>
      </div>
      <div class="field">
        <label class="label">Nombre de usuario</label>
        <div class="control">
          <input class="input" type="text" placeholder="Nombre de usuario" v-model="user.userName">
        </div>
      </div>
      <div class="field">
        <label class="label">Correo electrónico</label>
        <div class="control">
          <input class="input" type="email" placeholder="ej: usuario@ejemplo.com" v-model="user.email">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary" @click="save">Guardar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script src="@/services/User.js" />

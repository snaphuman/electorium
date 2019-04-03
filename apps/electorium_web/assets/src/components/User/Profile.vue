<template>
  <div class="box">
    <h2 class="title">Perfil de usuario</h2>
    <form>
      <div class="field">
        <label class="label">Nombre completo</label>
        <div class="control">
          <input class="input" type="text" placeholder="Ingrese nombres y apellidos">
        </div>
      </div>
      <div class="field">
        <label class="label">Nombre de usuario</label>
        <div class="control">
          <input class="input" type="text" placeholder="Nombre de usuario">
        </div>
      </div>
      <div class="field">
        <label class="label">Correo electrónico</label>
        <div class="control">
          <input class="input" type="email" placeholder="ej: usuario@ejemplo.com">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary">Guardar</button>
        </div>
      </div>
    </form>
  </div>
</template>

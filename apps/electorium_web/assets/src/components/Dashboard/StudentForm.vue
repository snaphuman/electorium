<template>
  <div class="box">
    <h2 class="title">Editar</h2>
    <form>
      <div class="field">
        <label class="label">Nombres</label>
        <div class="control">
          <input class="input" type="text" placeholder="Ingrese el nombre del esutdiante">
        </div>
      </div>
      <div class="field">
        <label class="label">Apellidos</label>
        <div class="control">
          <input class="input" type="text" placeholder="Ingrese los apellidos del estudiante">
        </div>
      </div>
      <div class="field">
        <label class="label">Wallet</label>
        <div class="field has-addons">
          <div class="control">
            <input class="input" type="text" disabled>
          </div>
          <div class="control">
            <a class="button is-info">Generar</a>
          </div>
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

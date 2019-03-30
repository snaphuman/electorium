<template>
  <div class="box">
    <h2 class="title">Editar</h2>
    <form>
      <div class="field">
        <label class="label">Nombre del colegio</label>
        <div class="control">
          <input class="input" type="text" placeholder="Ingrese el nombre del colegio">
        </div>
      </div>
      <div class="field">
        <label class="label">Dirección</label>
        <div class="control">
          <input class="input" type="text" placeholder="ej: carrera 40, 10 - 61">
        </div>
      </div>
      <div class="field">
        <label class="label">Localidad</label>
        <div class="control">
          <div class="select">
            <select>
              <option selected disabled>Seleccione</option>
              <option v-for="location in locations" v-bind:value="location">{{ location }}</option>
            </select>
          </div>
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

<script src="@/services/SchoolForm.js">

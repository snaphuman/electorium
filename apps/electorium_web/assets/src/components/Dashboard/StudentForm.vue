<template>
  <div class="box">
    <h2 class="title">Editar</h2>
    <form>
      <div class="field">
        <label class="label">Nombres</label>
        <div class="control">
          <input class="input" type="text" placeholder="Ingrese el nombre del esutdiante" v-model="student.name">
        </div>
      </div>
      <div class="field">
        <label class="label">Apellidos</label>
        <div class="control">
          <input class="input" type="text" placeholder="Ingrese los apellidos del estudiante" v-model="student.last_name">
        </div>
      </div>
      <div class="field">
        <label class="label">Correo</label>
        <div class="control">
          <input class="input" type="email" placeholder="correo@ejemplo.com" v-model="student.email">
        </div>
      </div>
      <div class="field">
        <label class="label">Curso</label>
        <div class="control">
          <div class="select">
            <select v-model="student.course">
              <option selected disabled>Seleccione</option>
              <option>10A</option>
              <option>10B</option>
              <option>10C</option>
              <option>11A</option>
              <option>11B</option>
              <option>11C</option>
            </select>
          </div>
        </div>
      </div>
      <nav class="panel">
        <p class="panel-heading">
          Wallet
        </p>
        <div class="panel-block">
          <div class="field is-horizontal">
            <div class="field-label is-small">
              <label class="label">Public key</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control is-expanded">
                  <input class="input is-fullwidth" type="text" v-model="keypair.publicKey" readonly>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-block">
          <div class="field is-horizontal">
            <div class="field-label is-small">
              <label class="label">Private key</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded">
                  <input class="input" type="text" v-model="keypair.secretKey" readonly>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-block">
          <button class="button is-link is-outlined is-fullwidth" @click="genKeypair">
            Re-generate keypair
          </button>
        </div>
      </nav>
      <div class="field">
        <div class="control">
          <button class="button is-primary" @click="save">Guardar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script src="@/services/Student.js" />

<style lang="css" scoped>
  .field.is-horizontal {
  width: 100%;
  }
</style>

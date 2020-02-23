<template>
  <div class="box">
    <h2 class="title">Postular candidato</h2>
    <form>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="text" placeholder="Ingrese correo electrónico a postular" v-model="student.email">
        </div>
      </div>
      <div class="field">
        <label class="label">Nominación</label>
        <div class="control">
          <div class="select is-primary">
            <select v-model="candidate.nomination">
              <option>Seleccione una opción</option>
              <option>Personero</option>
              <option>Contralor</option>
              <option>Veedor</option>
              <option>Consejero</option>
              <option>Vigía de la salud</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Propuesta</label>
        <div class="control">
          <textarea class="textarea" type="text" placeholder="Ingrese la propuesta completa del candidato" v-model="candidate.proposal"></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Photo</label>
        <div class="control">
          <input class="input" type="text" placeholder="Cargar fotografía" v-model="candidate.photo">
        </div>
      </div>
      <div class="control">
        <button class="button is-primary" @click="save()">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script src="@/services/Candidate.js" />

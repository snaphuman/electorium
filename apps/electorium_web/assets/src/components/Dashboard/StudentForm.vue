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
          <input class="input" type="text" placeholder="Ingrese los apellidos del estudiante" v-model="student.lastname">
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
      <div class="field">
        <label class="checkbox">
          <input type="checkbox" v-model="student.isCandidate">
          Es Candidato(a)
        </label>
      </div>
      <CandidateForm v-if="student.isCandidate" v-bind:getCandidateData.sync="candidateData" disableSubmit></CandidateForm>
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
          <button class="button is-primary" @click="save">Guardar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script src="@/services/Student.js" />

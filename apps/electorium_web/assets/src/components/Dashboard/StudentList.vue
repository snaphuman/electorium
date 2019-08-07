<template>
  <div class="box">
    <h2 class="title">Lista estudiantes</h2>
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>Curso</th>
            <th>Candidato</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="student.publicKey" v-for="student in students">
            <td>{{ student.name }}</td>
            <td>{{ student.lastname }}</td>
            <td>{{ student.email }}</td>
            <td>{{ student.course }}</td>
            <td>
              <div class="field">
                <b-switch v-model="student.isCandidate" @input="showCandidateModal(student.publicKey)">
                  {{ student.isCandidate }}
                </b-switch>
              </div>
            </td>
            <td><a class="button is-info">Ver</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal" v-bind:class="{'is-active': showModal }">
      <div class="modal-background" @click="toggleModal()"></div>
      <div class="modal-content">
        <CandidateForm v-if="showCandidateForm" v-bind:getCandidateData.sync="candidateData" v-bind:enableSubmit="true"></CandidateForm>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="toggleModal()"></button>
    </div>
  </div>
</template>

<script src="@/services/StudentList.js" />

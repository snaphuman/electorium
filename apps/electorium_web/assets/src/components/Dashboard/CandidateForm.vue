<template>
  <div class="box">
    <h2 class="title">Postular candidato</h2>
    <form>
      <div class="field">
        <label class="label">Propuesta</label>
        <div class="control">
          <textarea class="textarea" type="text" placeholder="Ingrese la propuesta completa del candidato"></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Nominación</label>
        <div class="control">
          <div class="select is-primary">
            <select>
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
        <div class="control">
          <button class="button is-primary">Guardar</button>
        </div>
      </div>
    </form>
  </div>
</template>

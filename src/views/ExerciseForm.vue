<template>
  <div class="container mt-2">
    <div class="container mt-2">
      <b-form-group
        label="Todo movimento conta para sua saúde e a prática de atividades físicas regulares pode ser uma grande aliada no controle da pressão arterial. Registre aqui suas atividades realizadas e procure acumular 150 minutos/semana de atividades física moderada a vigorosa."
        label-for="subject"
      >
        <b-form-group
          label="Preencha os campos abaixo"
          label-for="subject"
        ></b-form-group>
        <b-form-datepicker placeholder="Data: Obrigatória" class="mb-6">
        </b-form-datepicker>
      </b-form-group>
    </div>

    <div class="container mt-2">
      <b-form-timepicker
        placeholder="Hora: Obrigatória"
        class="mb-6"
      ></b-form-timepicker>
    </div>

    <div class="container mt-2">
      <b-form-input
        list="input-list"
        placeholder="Exercício: Obrigatória"
        class="mb-6"
        :options="optionsExercise"
      ></b-form-input>
      <b-form-datalist
        placeholder="Exercício: Obrigatória"
        class="mb-6"
        id="input-list"
        :options="optionsExercise"
      ></b-form-datalist>
    </div>

    <div class="container mt-2">
      <b-form-input
        list="input-list"
        placeholder="Duração: Obrigatória"
        class="mb-6"
        id="input-list"
        :options="optionsDurationExercise"
      ></b-form-input>
      <b-form-datalist></b-form-datalist>
    </div>

    <!-- <div class="container mt-2">
      <b-form-input list="input-list"></b-form-input>
      <b-form-datalist
        id="input-list"
        :options="type"
      ></b-form-datalist>
    </div> -->

    <div class="container mt-2">
      <b-form-input
        list="input-list"
        id="input-list"
        placeholder="Intensidade"
        class="mb-6"
        :options="intensity"
      ></b-form-input>
      <b-form-datalist></b-form-datalist>
    </div>

    <div class="container mt-2">
      <b-button variant="primary" class="mb-6">Enviar</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionsExercise: ["Bicicleta", "Caminhada", "Corrida", "Musculação"],
      optionsDurationExercise: ["30min", "1h", "1h:30min", "2h"],
    };
  },
};
</script>

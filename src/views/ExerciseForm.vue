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
      <b-form-select class="mb-6" v-model="selected" :options="optionsExercise">
      </b-form-select>
    </div>

    <div class="container mt-2">
      <b-form-select
        class="mb-6"
        v-model="selected"
        :options="optionsDurationExercise"
      >
      </b-form-select>
    </div>

    <div class="container mt-2">
      <b-form-select class="mb-6" v-model="selected" :options="intensity">
      </b-form-select>
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
      selected: null,
      optionsExercise: [
        { text: "Exercício: Obrigatório", value: null },
        { text: "Academia", value: "Academia" },
        { text: "Corrida", value: "Corrida" },
        { text: "Caminhada", value: "Caminhada" },
        { text: "Dança", value: "Dança" },
        { text: "Natação", value: "Natação" },
        { text: "Piscina", value: "Piscina" },
        { text: "Pulo", value: "Pulo" },
        { text: "Remo", value: "Remo" },
        { text: "Spinning", value: "Spinning" },
        { text: "Stepping", value: "Stepping" },
        { text: "Yoga", value: "Yoga" },
      ],
      optionsDurationExercise: [
        { text: "Duração: Obrigatória", value: null },
        { text: "30min", value: "30min" },
        { text: "1 hora", value: "1 hora" },
        { text: "1h:30min", value: "1h:30min" },
        { text: "2 horas", value: "2 horas" },
      ],
      intensity: [
        { text: "Intensidade", value: null },
        { text: "Fácil", value: "easy" },
        { text: "Médio", value: "medium" },
        { text: "Difícil", value: "hard" },
      ],
    };
  },
};
</script>

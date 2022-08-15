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
      <b-form-select class="mb-6" v-model="selected" :options="optionsPAS">
      </b-form-select>
    </div>

    <div class="container mt-2">
      <b-form-select class="mb-6" v-model="selected" :options="optionsPAD">
      </b-form-select>
    </div>

    <div class="container mt-2">
      <b-form-select class="mb-6" v-model="selected" :options="heartRate">
      </b-form-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      optionsPAS: [
        { text: "PAS (Pressão Arterial Sistólica): Obrigatório", value: null },
        { text: "Menor que 85 mmHg", value: "85mmHg" },
        { text: "Entre 85 e 89 mmHg", value: "85 e 89 mmHg" },
        { text: "Entre 90 e 99 mmHg", value: "Dan90 e 99 mmHgça" },
        { text: "Entre 100 e 109 mmHg", value: "100 e 109 mmHg" },
        { text: "Maior ou igual a 110 mmHg", value: "110 mmHg" },
        { text: "Menor que 90 mmHg", value: "90 mmHg" },
      ],
      optionsPAD: [
        { text: "PAD (Pressão Arterial Diastólica): Obrigatório", value: null },
        { text: "Menor que 130 mmHg", value: "130mmHg" },
        { text: "Entre 130 e 139 mmHg", value: "130 e 139 mmHg" },
        { text: "Entre 140 e 159 mmHg", value: "140 e 159 mmHg" },
        { text: "Entre 160 e 179 mmHg", value: "160 e 179 mmHg" },
        { text: "Maior ou igual a 180 mmHg", value: "180 mmHg" },
        { text: "Menor que 140 mmHg", value: "140 mmHg" },
      ],
      heartRate: [
        { text: "Frequência cardíaca", value: null },
        { text: "120 a 140 bpm", value: "120 a 140 bpm" },
        { text: "80 a 100 bpm", value: "80 a 100 bpm" },
        { text: "70 a 80 bpm", value: "70 a 80 bpm" },
        { text: "50 a 60 bpm", value: "50 a 60 bpm" },
      ],
    };
  },
};
</script>

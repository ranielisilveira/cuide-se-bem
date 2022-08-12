<template>
  <div class="container mt-2">
    <b-card title="Resumo da pessoa">
      <b-card-text>(variável doença crônica) doenças crônicas</b-card-text>
      <b-button variant="outline-info" class="mr-2">Editar dados</b-button>
    </b-card>
    <b-card title="Pressão arterial">
      <b-card-text>Última medição (variável data da medição)</b-card-text>
      <b-card-text>Resultado (variável da medição)</b-card-text>
      <b-button variant="primary" class="mr-2">Aferir pressão agora</b-button>
      <b-button variant="outline-info" class="mr-2">Ver diário</b-button>
    </b-card>
    <b-card title="Atividade física">
      <b-card-text>Última atividade (variável data da atividade)</b-card-text>
      <b-card-text>Tipo (variável do tipo)</b-card-text>
      <b-card-text>Duração (variável da duração)</b-card-text>
      <b-button variant="primary" class="mr-2">Aferir pressão agora</b-button>
      <b-button variant="outline-info" class="mr-2">Ver diário</b-button>
    </b-card>

    <h5>
      Essa semana você fez (variável da porcentagem) do seu objetivo de
      (variável de objetivo) semanais.
    </h5>
  </div>
</template>

<template>
  <div class="container mt-2">
    <b-card title="Meu Resumo">
      <b-card bg-variant="dark" text-variant="white" title="Meu Resumo">
        <b-avatar class="align-baseline" size="6rem"></b-avatar>
        (variável nome)
        <p>(variável idade)</p>
        <b-card-text>(variável doença crônica) doenças crônicas</b-card-text>
        <b-button href="#" variant="outline-info" class="mr-2"
          >Editar dados</b-button
        >
      </b-card>
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
    <b-card title="Dica do dia">
      <div class="container mt-2">
        <b-card
          img-src="https://placekitten.com/300/300"
          img-alt="Card image"
          img-left
          class="mb-3"
        >
          <b-card-text>
            <div class="card-header">Corridinha de 15 minutos</div>
            <div class="card-body">
              <h5 class="card-title">
                Você sabia? Correr 15 minutos por dia diminui os níveis de
                estresse.
              </h5>

              <a href="#" class="btn btn-primary">Vamos lá?</a>
            </div>
          </b-card-text>
        </b-card>
      </div>
    </b-card>
  </div>
</template>

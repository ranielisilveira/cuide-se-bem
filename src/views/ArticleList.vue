<template>
  <div class="container mt-2">
    <div class="container mt-2">
      <b-form-group
        label="Veja algumas dicas que podem te ajudar melhor a controlar a sua pressão arterial e a ter uma vida mais saudável"
        label-for="subject"
      >
      </b-form-group>
    </div>

    <div class="container mt-2">
      <div class="container mb-4">
        <b-form-input
          list="input-list"
          id="input-list"
          placeholder="Categorias"
          class="mb-6"
          :options="categories"
        ></b-form-input>
        <b-form-datalist></b-form-datalist>
      </div>

      <div class="card">
        <div class="card-header">Corridinha de 15 minutos</div>
        <div class="card-body">
          <h5 class="card-title">
            Você sabia? Correr 15 minutos por dia diminui os níveis de estresse.
          </h5>

          <a href="#" class="btn btn-primary">Vamos lá?</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Alongamento é tudo</div>
        <div class="card-body">
          <h5 class="card-title">
            A importÂncia do alongamento na atividade física é indispensável.
          </h5>

          <a href="#" class="btn btn-primary">Vamos lá?</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Aeróbicos vão te ajudar</div>
        <div class="card-body">
          <h5 class="card-title">
            Manter sua rotina de aeróbicos ajudam a regular sua pressão.
          </h5>

          <a href="#" class="btn btn-primary">Vamos lá?</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Musculação é revigorante</div>
        <div class="card-body">
          <h5 class="card-title">
            Não apenas para seu músculo mas também para sua energia.
          </h5>

          <a href="#" class="btn btn-primary">Vamos lá?</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Os melhores tênis para corrida</div>
        <div class="card-body">
          <h5 class="card-title">
            O equilíbrio de um bom tênis é muito importante na corrida.
          </h5>

          <a href="#" class="btn btn-primary">Vamos lá?</a>
        </div>
      </div>

      <h1>ArticleList</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ["Bicicleta", "Caminhada", "Corrida", "Musculação"],
    };
  },
};
</script>

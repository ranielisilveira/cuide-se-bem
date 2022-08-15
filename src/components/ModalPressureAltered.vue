<template>
  <div class="container mt-2">
    <b-button @click="showMsgOk" variant="primary">Enviar</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    showMsgOk() {
      const h = this.$createElement;
      const titleVNode = h("div", { class: ["text-center"] }, [
        h("h5", { class: ["text-center"] }, ["Ops, podemos melhorar!"]),
      ]);
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-center"] }, [
          " Sua pressão arterial está fora dos parâmetros considerados normais. ",
          h("strong", "150/90mmHG"),
        ]),
        // h("p", { class: ["text-center"] }, [h("b-spinner")]),

        h("p", { class: ["text-center"] }, [
          " Lembre-se de tomar seus medicamentos de forma correta e adote ou mantenha hábitos saudáveis. ",
        ]),
        h("p", { class: ["text-center"] }, [
          " Pratique exercícios físicos, fiminua o consumo de sódio e de alimentos processados e ultrapassados, reduza o consumo de álcool e evite ambientes ou situações estressantes. ",
        ]),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        centered: true,
        size: "sm",
      });
    },
  },
};
</script>

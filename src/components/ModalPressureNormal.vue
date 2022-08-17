<template></template>

<script>
export default {
  methods: {
    showMsgOk() {
      const h = this.$createElement;
      const titleVNode = h("div", { class: ["text-center"] }, [
        h("h5", { class: ["text-center"] }, ["Muito Bem!"]),
      ]);
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-center"] }, [
          " Sua pressão arterial está controlada. ",
          h("strong", "110/70mmHG"),
        ]),
        // h("p", { class: ["text-center"] }, [h("b-spinner")]),

        h("p", { class: ["text-center"] }, [
          " Sua pressão arterial está dentro dos limites considerados normais. ",
        ]),
        h("p", { class: ["text-center"] }, [
          " Continue assim! Você parece estar no caminho certo. ",
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

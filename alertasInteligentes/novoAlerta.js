var novoAlerta = Vue.component("novo-alerta", {
  name: "novo-alerta",
  props: {},
  data() {
    return {
    };
  },
  created() {},
  mounted() {},
  methods: {
    selecionarAlerta(alerta) {
      if (alerta == this.alertaSelecionado) {
        this.alertaSelecionado = "";
      } else {
        this.alertaSelecionado = alerta;
      }
    },
  },
  watch: {},
  computed: {},
  template: `
    <div class="vueContainer">
      <div class="row justify-content-end px-3">
          <div class="containerVue">O que você quer receber?</div>
          <div class="containerVue">Como você quer receber?</div>
          <div class="containerVue">Para quem vai ser enviado?</div>
      </div>
      <div class="containerVue">
    asdad
      </div>
  </div>`,
});

new Vue({ el: "#novoAlerta" });

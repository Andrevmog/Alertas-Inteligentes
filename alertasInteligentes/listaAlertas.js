var listaAlertas = Vue.component("lista-alertas", {
  name: "lista-alertas",
  props: {},
  data() {
    return {
      pesquisaNomeAlerta: "",
      lista: listaMock,
      tipoAlertaSelecionado: "clip",
      alertaSelecionado: {},
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
    <div class="containerVue" style="background-color:#F3F3F4">

      <div class="row mb-2">
        <div class="col-lg-6 col-md-12 col-sm-12 justify-content-between d-flex p-2">
          <button class="btn btn-primary">Novo Alerta</button>
          <div class="groupBtnClip">
              <span class="btnCompClip left text-nowrap" @click="tipoAlertaSelecionado = 'clip' "><i class="fas fa-bell"></i></span>
              <span class="btnCompClip midle" @click="tipoAlertaSelecionado = 'anexo' "><i class="fas fa-newspaper"></i></span>
              <span class="btnCompClip right" @click="tipoAlertaSelecionado = 'sms' "><i class="fas fa-comment-dots"></i></span>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 d-flex justify-content-between p-2" style="gap:10px;">
            <input class="form-control" placeholder="Digite o nome do alerta"></input>
            <button class="btn btn-primary" >Pesquisar</button>
        </div>

      </div>

      <div class="row justify-content-between labelTable">
        <span class="p-2 pl-4 col text-left">Tipo</span>
        <span class="p-2 col text-center ">Nome do Alerta</span>
        <span class="p-2 col text-center ">Data da criação</span>
        <span class="p-2 col text-center ">Autor</span>
        <span class="p-2 col text-center ">Ações</span>
      </div>
      <div class="row p-2 justify-content-between alerta">
          <span class="col text-left p-2 pl-4 "><i class="fas fa-newspaper"></i></span>
          <span class="col text-center p-2">Loram Ipsum</span>
          <span class="col text-center p-2">0/06/2021</span>
          <span class="col text-center p-2">Mariara Süedekum</span>
          <span class="col text-center p-2">Ações</span>
      </div>


    </div>
  </div>`,
});

new Vue({ el: "#listaAlertas" });

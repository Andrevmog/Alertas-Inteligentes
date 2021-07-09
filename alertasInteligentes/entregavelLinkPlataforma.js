var historicoEnvioAlertas = Vue.component("historico-envio-alertas", {
  name: "historico-envio-alertas",
  props: {},
  data() {
    return {
      idAlerta:undefined,
      filtro:{
        periodo:{
          data_inicial:'01/01/2020',
          data_final:'01/01/2020',
        }
      },
      lista: listaMock,
    };
  },
  created() {
    let vueContainer = document.getElementById("historicoEnvioAlertas");
    this.idAlerta = vueContainer.attributes.idalerta.value;
  },
  mounted() {},
  methods: {
    async carregarHistoricoAlertas(){
      const url = `api/AlertasInteligentes/historicoAlerta?idAlerta=${this.idAlerta}`
      const response = await fetch(url);
      const data = await response.json();
      return data
    },
    async encaminharAlerta(id_alerta) {
      const url = `api/AlertasInteligentes/encaminharAlerta?idAlerta=${id_alerta}`
      const response = await fetch(url);
      const data = await response.json();
      return data
    },
    visualizarAlerta(){},
    pesquisarHistorico(){},
  },
  watch: {},
  computed: {},
  template: `
  <div class="vueContainer">
    <div class="containerVue" style="background-color:#F3F3F4">

      <div class="row mb-2">
        <div class="col-lg-6 col-md-12 col-sm-12 d-flex pt-3" style="gap:10px;">
            <iconList class="pt-2" icon="fa-bell"/>
            <h4 class="">[Nome do Alerta]</h4>
        </div>

        <div class="col-lg-6 col-md-12 d-flex justify-content-between p-3" style="gap:10px;">
            <DateRange :periodo="filtro.periodo" />
            <Button green label="Pesquisar"/>
        </div>
      </div>

      <div class="row px-3 justify-content-between ">
        <span class="pl-4 py-2 col">Data do disparo</span>
        <span class="p-2 col text-center ">Destinatários</span>
        <span class="p-2 col text-center ">Visualizados</span>
        <span class="p-2 col text-center ">Cliques do link</span>
        <span class="p-2 col text-center ">Ações</span>
      </div>

      <div v-for="alerta in lista" class="col p-2 justify-content-between alerta">
        <div class="row">
          <span class="col text-center p-2">{{alerta.dataCriacao}}</span>
          <span class="col text-center p-2">7</span>
          <span class="col text-center p-2">5</span>
          <span class="col text-center p-2">3</span>
          <span class="col text-center p-2 d-flex justify-content-center" style="gap:25px;">
            <miniButton @click="encaminharAlerta(alerta.id_alerta)" icon="fa-share"/>
            <miniButton @click="" icon="fa-eye"/>
          </span>
        </div>
      </div>


    </div>
  </div>`,
});

new Vue({ el: "#historicoEnvioAlertas" });

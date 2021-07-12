var listaAlertas = Vue.component("lista-alertas", {
  name: "lista-alertas",
  props: {},
  data() {
    return {
      pesquisaNomeAlerta: "",
      lista: listaMock,
      tipoAlertaSelecionado: ['clip','anexo','sms'],
      alertaSelecionado: {},
    };
  },
  created() {
    this.carregarAlertas();
  },
  mounted() {},
  methods: {
    carregarAlertas(){},
    selecionarAlerta(alerta) {
      if (alerta == this.alertaSelecionado) {
        this.alertaSelecionado = "";
      } else {
        this.alertaSelecionado = alerta;
      }
    },
    selecionarTipoAlerta(tipo){
      if(this.tipoAlertaSelecionado.includes(tipo)){
        this.tipoAlertaSelecionado = this.tipoAlertaSelecionado.filter((t) => { 
        return t != tipo;
    });
      }else{
        this.tipoAlertaSelecionado.push(tipo)
      }
    },
    pesquisarAlerta(){},
    enviarEmail(){},
    deletarAlerta(){},
    editarAlerta(){},
    novoAlerta(){},
  },
  watch: {},
  computed: {
		alertasFiltrados() {
			return this.lista.filter((alerta) => {
        // Se não estiver na lista atual, manda o 
				return alerta.nome.toLowerCase().includes(this.pesquisaNomeAlerta.toLowerCase());
			});
		},
  },
  template: `
  <div class="vueContainer">
    <div class="containerVue" style="background-color:#F3F3F4">

      <div class="row mb-2">
        <div class="col-lg-6 col-md-12 col-sm-12 justify-content-between d-flex p-3">
          <Button white label="Novo Alerta"/>
          <div class="groupBtnClip">
              <span v-bind:class="{'optionSelect': tipoAlertaSelecionado.includes('clip')}" class="btnCompClip left text-nowrap" @click="selecionarTipoAlerta('clip')"><i class="fas fa-bell"></i></span>
              <span v-bind:class="{'optionSelect': tipoAlertaSelecionado.includes('anexo')}"  class="btnCompClip midle" @click="selecionarTipoAlerta('anexo')"><i class="fas fa-newspaper"></i></span>
              <span v-bind:class="{'optionSelect': tipoAlertaSelecionado.includes('sms')}" class="btnCompClip right" @click="selecionarTipoAlerta('sms')"><i class="fas fa-comment-dots"></i></span>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 d-flex justify-content-between p-3" style="gap:10px;">
            <input v-model="pesquisaNomeAlerta" class="form-control" placeholder="Digite o nome do alerta"></input>
            <Button white label="Pesquisar"/>
        </div>

      </div>

      <div class="row px-3 justify-content-between ">
        <span class="pl-4 py-2 col">Tipo</span>
        <span class="p-2 col text-center ">Nome do Alerta</span>
        <span class="p-2 col text-center ">Data da criação</span>
        <span class="p-2 col text-center ">Autor</span>
        <span class="p-2 col text-center ">Ações</span>
        <span class="p-2 col text-center "></span>
      </div>
      <div 
        v-for="alerta in alertasFiltrados" 
        v-show="tipoAlertaSelecionado.includes(alerta.tipo)" 
        class="col p-2 justify-content-between alerta"
      >
        <div  class="row">
          <span class="col text-left p-2 pl-4 ">
            <iconList v-if="alerta.tipo == 'clip'" icon="fa-newspaper"/>
            <iconList v-if="alerta.tipo == 'anexo'" icon="fa-paperclip"/>
            <iconList v-if="alerta.tipo == 'sms'" icon="fa-comment-alt"/>
          </span>
          <span class="col text-center p-2">{{alerta.nome}}</span>
          <span class="col text-center p-2">{{alerta.dataCriacao}}</span>
          <span class="col text-center p-2">{{alerta.autor}}</span>
          <span class="col text-center p-2 d-flex justify-content-center" style="gap:25px;">
            <miniButton @click="enviarEmail" icon="fa-envelope"/>
            <miniButton @click="editarAlerta" icon="fa-edit"/>
            <miniButton @click="deletarAlerta" icon="fa-trash"/>
          </span>
          <span class="p-2 col text-center ">
            <chevron @click.native="selecionarAlerta(alerta)" :value="alertaSelecionado == alerta"/>
          </span>
        </div>
        <div v-show="alertaSelecionado == alerta" class="p-2 ">
            <div class="col p-3 border-top">
              Entrega para o Banco do Brasil de posts do Facebook e posts do Instagram todos os dias às 9h do dia 08 a 11 de junho por e-mail e pelo WhatsApp
            </div>
        </div>
      </div>
      <div v-if="tipoAlertaSelecionado.length == 0 || alertasFiltrados.length == 0" class="alert alert-danger" role="alert">
        Mensagem quando o filtro não tem nada ou a pesquisa não retorna nada!!!
      </div>
    </div>
  </div>`,
});


new Vue({ el: "#listaAlertas" });

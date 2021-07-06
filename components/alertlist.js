
var listaAlertas = Vue.component("lista-alertas", {
    name: "lista-alertas",
    props: {},
    data() {
      return {
        pesquisaNomeAlerta: "",
        lista: listaMock,
        style: listaAlertasStyle,
        tipoAlertaSelecionado: "clip",
        alertaSelecionado:{},
      };
    },
    created() {},
    mounted() {},
    methods: {
        selecionarAlerta(alerta){
           if(alerta == this.alertaSelecionado){
               this.alertaSelecionado='';
           }else{
               this.alertaSelecionado=alerta;
           }
        },
    },
    watch: {},
    computed: {},
    template:`
    <div class="containerListaAlertas">
    <div class="form">
        <div class="busca">
            <button class="botaoBranco">Novo Alerta</button>
        </div>
        <div class="busca">
          <div class="botoes" style="margin-right:30px">
            <div>
                <button class="botaoTipo" @click="tipoAlertaSelecionado = 'clip' "><i class="fal fa-bell"></i></button>
            </div>
            <div>
                <button class="botaoTipo" @click="tipoAlertaSelecionado = 'anexo' "><i class="fal fa-newspaper"></i></button>
            </div>
            <div>
                <button class="botaoTipo" @click="tipoAlertaSelecionado = 'sms' "><i class="fal fa-file-chart-line"></i></button>
            </div>
          </div>
          <div style="margin-right:30px;">
              <input class="input" placeholder="Digite o nome do alerta"></input>
          </div>
          <div>
              <button class="botaoZeeng" style="width:180px;margin-right:30px">Pesquisar</button>
          </div>
        </div>
    </div>
    <div class="header">
        <span>Tipo</span>
        <span>Nome do alerta</span>
        <span>Data de criação</span>
        <span>Autor</span>
        <span>Ações</span>
        <span></span>
    </div>
    <div class="listaDeAlerta" style="margin-left:30px;margin-right:30px">
      <div v-for="alerta in lista" v-if="alerta.tipoAlerta == tipoAlertaSelecionado">
        <div class="alerta">
        <div class="alertaDados">  
            <span >
                <i style="color:#1ab394;" v-show="alerta.tipoAlerta == 'clip' " class="fal fa-bell"></i>
                <i style="color:#1ab394;" v-show="alerta.tipoAlerta == 'anexo' " class="fal fa-newspaper"></i>
                <i style="color:#1ab394;" v-show="alerta.tipoAlerta == 'sms' " class="fal fa-file-chart-line"></i>
            </span>
            <span class="">{{alerta.nomeAlerta}}</span>
            <span class="">{{alerta.nomeAlerta}}</span>
            <span class="">{{alerta.nomeAlerta}}</span>
            <span class="">
                <i style="margin-right:15px;cursor: pointer;" class="fas fa-envelope"></i>
                <i style="margin-right:15px;cursor: pointer;" class="fas fa-external-link-alt"></i>
                <i style="cursor: pointer;" class="fas fa-trash"></i>
            </span>
            <span @click="selecionarAlerta(alerta)" class="">
                <i v-show="alerta == alertaSelecionado " class="fas fa-chevron-up"></i>
                <i v-show="alerta != alertaSelecionado " class="fas fa-chevron-down"></i>
            </span>
        </div>
        <div class="alertaDetalhes" v-show="alerta == alertaSelecionado">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>
        </div>
      </div>
    </div>
  </div>`
    ,
  });
  
  const listaAlertasStyle = {
    containerListaAlertas: `display:flex;flex-direction:column;gap:20px;`,
  };
  
  const listaMock = [
    {
      tipoAlerta: "clip",
      nomeAlerta: "Alerta 1",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "clip",
      nomeAlerta: "",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "clip",
      nomeAlerta: "Alerta 3",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "clip",
      nomeAlerta: "Alerta 4",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "clip",
      nomeAlerta: "Alerta 5",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "anexo",
      nomeAlerta: "Alerta 6",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "sms",
      nomeAlerta: "Alerta 7",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "clip",
      nomeAlerta: "Alerta 8",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "clip",
      nomeAlerta: "Alerta 9",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
    {
      tipoAlerta: "clip",
      nomeAlerta: "Alerta 10",
      dataCriacao: "01/01/2021",
      autor: "Maiara",
    },
  ];
  new Vue({ el: "#lista-alertas" });
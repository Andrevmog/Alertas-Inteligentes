
var listaAlertas = Vue.component("historico-alertas", {
    name: "historico-alertas",
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
        <div class="busca" style="margin-left:30px">
            <i style="color:#1ab394;margin-right:9px" class="fal fa-bell"></i>
            <span style="font-size:22px">[Nome do Alerta]</span>
        </div>
        <div class="busca">
          <div class="input-daterange input-group" id="selecaoDatasFinal" style="margin-right:30px">
                <input type="text" class="input-sm form-control" name="fstart" id="fdtinicial" value="" />
                <span class="input-group-addon" style="display:flex;align-items:center;background-color:#e4e4e4;justify-content: center; border-color: #e4e4e4;width:50px">até</span>
                <input type="text" class="input-sm form-control" name="fend" id="fdtfinal" value="" />
          </div>
          <div>
              <button class="botaoZeeng" style="width:180px;margin-right:30px">Pesquisar</button>
          </div>
        </div>
    </div>
    <div class="header">
        <span>Data do disparo</span>
        <span>Destinatários</span>
        <span>Visualizados</span>
        <span>Cliques do link</span>
        <span>Ações</span>
    </div>
    <div class="listaDeAlerta" style="margin-left:30px;margin-right:30px">
      <div v-for="alerta in lista" v-if="alerta.tipoAlerta == tipoAlertaSelecionado">
        <div class="alerta">
        <div class="alertaDados">  
            <span class="">{{alerta.dataCriacao}}</span>
            <span class="">{{alerta.nomeAlerta}}</span>
            <span class="">{{alerta.nomeAlerta}}</span>
            <span class="">{{alerta.nomeAlerta}}</span>
            <span class="">
                <i style="margin-right:15px;cursor: pointer;" class="fas fa-eye"></i>
                <i style="cursor: pointer;" class="fas fa-share"></i>
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
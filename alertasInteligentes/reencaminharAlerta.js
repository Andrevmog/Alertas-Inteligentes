var reencaminharAlertas = Vue.component("reencaminhar-alertas", {
  name: "reencaminhar-alertas",
  props: {},
  data() {
    return {
      pesquisaNomeAlerta: "",
      lista: listaMock,
      style: listaAlertasStyle,
      tipoSelecionado: "clip",
      alertaSelecionado: {},
      dados:{
        link:'https:www.zeeng.com.br'
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    selecionarAlerta(alerta) {
      if (alerta == this.alertaSelecionado) {
        this.alertaSelecionado = '';
      } else {
        this.alertaSelecionado = alerta;
      }
    },
  },
  watch: {},
  computed: {},
  template: `
      <div class="vueContainer">
        <div class="containerVue">
          <div class="envio row">
            <div class="label col-md-12 col-lg-4">Qual o canal de envio?</div>
            <div class="inputContainer justify-content-between d-flex col-md-12 col-lg-8">
              <div class="groupBtn">
                <span class="btnComp left">E-mail</span>
                <span class="btnComp midle">Whatsapp</span>
                <span class="btnComp right">SMS</span>
              </div>
              <i class="fas fa-check-circle"></i>
            </div>
          </div>

          <div class="emails row">
            <div class="label col-md-12 col-lg-4">Quais os emails dos usuários da plataforma?</div>
            <div class="inputContainer d-flex col-md-12 col-lg-8"><input class="form-control"/><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="emailsExternos row">
            <div class="label col-md-12 col-lg-4">Quais os e-mails externos?</div>
            <div class="inputContainer d-flex col-md-12 col-lg-8"><input class="form-control"/><i class="fas fa-check-circle"></i></div>
          </div>

          <div class="telefones row">
            <div class="label col-md-12 col-lg-4">Quais os números dos usuários?</div>
            <div class="inputContainer d-flex col-md-12 col-lg-8"><input class="form-control"/><i class="fas fa-check-circle"></i></div>
          </div>

          <copiarLink :value="dados.link" mostrarCheck />

          <div class="footer d-flex flex-row-reverse">
            <Button white label="Cancelar"/>
            <Button white label="Enviar"/>
          </div>
        </div>
      </div>


  `,
});


const listaAlertasStyle = {
  containerListaAlertas: `display:flex;flex-direction:column;gap:20px;`,
};

const listaMock = [{
    tipo: "clip",
    nome: "Alerta 1 Alerta 2 Alerta 3",
    dataCriacao: "01/01/2021",
    autor: "Maiara",
  },
  {
    tipo: "clip",
    nome: "sem nome",
    dataCriacao: "01/01/2021",
    autor: "Maiara",
  },
  {
    tipo: "clip",
    nome: "Alerta 3",
    dataCriacao: "01/01/2021",
    autor: "Maiara",
  },
  {
    tipo: "clip",
    nome: "Alerta 4",
    dataCriacao: "01/01/2021",
    autor: "Maiara",
  },
  {
    tipo: "clip",
    nome: "Alerta 5",
    dataCriacao: "01/01/2021",
    autor: "Maiara",
  },
  {
    tipo: "anexo",
    nome: "Alerta 6",
    dataCriacao: "01/01/2021",
    autor: "Maiara",
  },
  {
    tipo: "sms",
    nome: "Alerta 7",
    dataCriacao: "01/01/2021",
    autor: "Maiara",
  },
  {
    tipo: "clip",
    nome: "Alerta 8",
    dataCriacao: "01/01/2021",
    autor: "Maiara",
  },
  {
    tipo: "clip",
    nome: "Alerta 9",
    dataCriacao: "01/01/2021",
    autor: "Maiara",
  },
  {
    tipo: "clip",
    nome: "Alerta 10",
    dataCriacao: "01/01/2021",
    autor: "Maiara",
  },
];
new Vue({
  el: "#reencaminharAlertas"
});

var reencaminharAlertas = Vue.component("reencaminhar-alertas", {
  name: "reencaminhar-alertas",
  props: {},
  data() {
    return {
      pesquisaNomeAlerta: "",
      lista: listaMock,
      style: listaAlertasStyle,
      tipoAlertaSelecionado: "clip",
      alertaSelecionado: {},
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

          <copiarLink value="valor temporario" mostrarCheck />

          <div class="footer d-flex flex-row-reverse">
              <button class="btn btn-primary">Cancelar</button>
              <button class="btn btn-primary">Enviar</button>
          </div>
        </div>
      </div>


  `,
});

var copiarLink = Vue.component("copiarLink", {
  name: "copiarLink",
  props: {
    value:{
      type:String,
      required:true,
    },
    mostrarCheck:Boolean,
  },
  data() {
    return {
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

    <div class="">
        <div class="link row">
          <div class="label col-md-12 col-lg-4">Link</div>
          <div class="inputContainer d-flex col-md-12 col-lg-8">
            <input v-model="value" class="form-control"/>
            <span class="cp">Copiar</span>
            <i v-if="mostrarCheck" class="fas fa-check-circle"></i>
          </div>
        </div>
    </div>

  `,
});


const listaAlertasStyle = {
  containerListaAlertas: `display:flex;flex-direction:column;gap:20px;`,
};

const listaMock = [{
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
new Vue({
  el: "#reencaminharAlertas"
});

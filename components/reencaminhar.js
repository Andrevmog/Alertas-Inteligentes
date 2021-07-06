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
    <div class="form">
    <div class="header">
      <div class="col-md-12 alertaDetalhes">
      <div class="col-md-1">
      </div>
      <div class="col-md-2">
       <span class="txt" >Qual o canal de envio?</span>
      </div>
      <div class="col-md-4 botoes">
          <div >
            <button class="botaoTipo">E-mail</button>
          </div>
          <div>
            <button class="botaoTipo">Whatsapp</button>
          </div>
          <div>
            <button class="botaoTipo">SMS</button>
          </div>
      </div>
      <div class="col-md-3">
      </div>
      <div class="col=md-1">
        <i class="fas fa-check-circle"></i>
      </div>
      </div>
      <div class="col-md-12 alertaDetalhes">
      <div class="col-md-3">
       <span class="txt" style="text-size:bold;text-size:13px">Quais os emails dos usuários da plataforma?</span>
      </div>
      <div class="col-md-6 botoes">
        <div >
          <input id="txt" style="width:600px" type="password" class="typeahead form-control senhausuario">
        </div>
      </div>
      <div class="col-md-1">
      </div>
      <div class="col=md-1">
        <i class="fas fa-check-circle"></i>
      </div>
    </div>
    <div class="col-md-12 alertaDetalhes">
      <div class="col-md-1">
      </div>
      <div class="col-md-2">
       <span class="txt" style="text-size:bold">Quais os e-mails externos?</span>
      </div>
      <div class="col-md-4 botoes">
        <div >
          <input id="txt" style="width:600px;" type="password" class="typeahead form-control senhausuario">
        </div>
      </div>
      <div class="col-md-3">
      </div>
      <div class="col=md-1">
        <i class="fas fa-check-circle"></i>
      </div>
  </div>
  <div class="col-md-12 alertaDetalhes">
    <div class="col-md-3">
      <span class="txt" style="text-size:bold;">Quais os números dos usuários?</span>
    </div>
    <div class="col-md-4 botoes">
      <div >
        <input id="txt" style="width:600px;text-size:13px" type="password" class="typeahead form-control senhausuario">
      </div>
    </div>
    <div class="col-md-3">
    </div>
    <div class="col=md-1">
      <i class="fas fa-check-circle"></i>
    </div>
  </div>
  <div class="col-md-12 alertaDetalhes">
    <div class="col-md-1">
    </div>
    <div class="col-md-2">
      <span class="txt" style="text-size:bold">Link</span>
    </div>
    <div class="col-md-4 botoes">
      <div style="display:flex;align-items:center;">
      <input id="txt" style="width:600px;text-size:13px" type="password" class="typeahead form-control senhausuario">
        <div style="display:flex;width:600px">
          <span id="copiar">Copiar</span>
        </div>
      </div>
    </div>
  <div class="col-md-3">
  </div>
  <div class="col=md-1">
    <i class="fas fa-check-circle"></i>
  </div>
</div>
<div class="col-md-12 alertaDetalhes">
    <div class="col-md-6">
    </div>
    <div class="col-md-2">
      <button class="btn btn-primary" id="btnSalvar" type="button" onclick="salvarRelatorio(false)" style="width: 172px;background-color:#1ab394;color:#e5e6e7;border:1px solid #e5e6e7">
          Enviar
      </button>
    </div>
    <div class="col-md-2">
        <button class="btn btn-primary" id="btnCancelar" type="button" onclick="ReturnToList()" style="width: 172px;background-color:#fff;color:#e5e6e7;border:1px solid #e5e6e7">
            Cancelar
        </button>
    </div>
</div>
  </div>`,
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
var tiposDeAlertas = Vue.component("tipos-alertas", {
  name: "tipos-alertas",
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
  computed: {},
  template: `
  <div class="vueContainer">
    <div class="cardText" style="background-color:#F3F3F4">

      <div class="containerVue textGray p-3 text-justify">
        <h4 class="">Instruções</h4>
        <p>Neste local você poderá configurar para você ou sua equipe receber alertas de acordo com a sua necessidade, de forma automática e prática. Fique a vontade para criar quantos alertas desejar, com os critérios que preferir, mas lembre-se, apenas usuários administradores podem editá-los ou excluí-los, ok? Qualquer dúvida consulte nosso suporte (CTA para help center).</p>
      </div>
      <h4 class="py-4 pl-1 textGray">Escolha qual alerta você gostaria de gerar:</h4>

        <div class="row">

          <div class="col-lg-4 col-sm-12 mb-2">
            <div class="cardComponent">
              <div class="col-4 d-flex p-2 justify-content-center">
                <i class="fas fa-4x fa-bell centerAll"/>
              </div>
              <div class="col p-2 py-4 justify-content-center centerAll">
                <div>
                  <h4><b>Eventos</b></h4>
                  <p class="forceTextColor">Com esse alerta você sempre será sinalizado quando ocorrer novos eventos.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-12 mb-2">
            <div class="cardComponent">
              <div class="col-4 d-flex p-2 justify-content-center">
                <i class="fas fa-4x fa-newspaper centerAll"/>
              </div>
              <div class="col p-4 justify-content-center centerAll">
                <div>
                  <h4><b>Clipping</b></h4>
                  <p class="forceTextColor">Essa opção você recebe posts de redes sociais, matérias de imprensa de acordo com os critérios que escolher como: palavras-chaves, tags, etc.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-12 mb-2">
            <div class="cardComponent">
              <div class="col-4 d-flex p-2 justify-content-center">
                <i class="fas  fa-4x fa-file-alt centerAll" style=""/>
              </div>
              <div class="col p-4 justify-content-center centerAll">
                <div>
                  <h4><b>Relatório</b></h4>
                  <p class="forceTextColor">Neste alerta você define seus indicadores e recebe em forma de relatório.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class=""></div>
    </div>
  </div>`,
});

new Vue({ el: "#tiposDeAlertas" });

const Metodos = {
  carregarHistoricoAlertas() {
    //deve receber a lista do historico do alertas
    //em JSON
    const mockHistoricoAlertas = [
      {
        id_historico:1234,
        id_alerta: 12,
        data_do_disparo: '01/01/2020',
        qt_destinararios: 6,
        visualizados:5,
        cliques:3
      }

    ]
    console.log(mockHistoricoAlertas)
  },
  awayt encaminharAlerta(alerta) {
    const url = `api/AlertasInteligentes/encaminharAlerta?idAlerta=${id_alerta}`
    const response = await fetch(url);
    const data = await response.json();
  },
  visualizarAlerta() {},
  pesquisarHistorico() {},
};

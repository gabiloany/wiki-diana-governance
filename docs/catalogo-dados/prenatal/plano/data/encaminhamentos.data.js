export default [
  {
    tipo: "dado",
    campo: "Encaminhamentos",
    obrigatorioPec: "não",
    formatoPec: "check box",
    tabela: "-",
    coluna: "-",
    formatoBd: "-",
    obrigatorioBd: "-"
  },

  {
    tipo: "subsecao",
    texto: "Serviço especializado"
  },
  {
    tipo: "dado",
    campo: "Especialidade",
    obrigatorioPec: "sim",
    formatoPec: "combo box",
    tabela: "tb_encaminhamento",
    coluna: "co_especialidade_sisreg",
    formatoBd: "bigint",
    obrigatorioBd: "não"
  }
];
export default [
  {
    tipo: "dado",
    campo: "Tipo de atendimento",
    obrigatorioPec: "sim",
    formatoPec: "radio button",
    tabela: "tb_atend_prof",
    coluna: "tp_atend",
    formatoBd: "bigint",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Cidadão participou do atendimento",
    obrigatorioPec: "não",
    formatoPec: "check box",
    tabela: "-",
    coluna: "-",
    formatoBd: "-",
    obrigatorioBd: "-"
  },
];
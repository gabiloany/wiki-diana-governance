export default [
  {
    tipo: "dado",
    campo: "Profissional",
    obrigatorioPec: "não",
    formatoPec: "combo box",
    tabela: "-",
    coluna: "-",
    formatoBd: "-",
    obrigatorioBd: "-"
  },
  {
    tipo: "dado",
    campo: "Forma de participação",
    obrigatorioPec: "não",
    formatoPec: "combo box",
    tabela: "tb_atend_prof",
    coluna: "tp_participacao_prof_convidado",
    formatoBd: "bigint",
    obrigatorioBd: "sim"
  }
];
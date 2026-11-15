export default [
  {
    tipo: "dado",
    campo: "Maternal",
    obrigatorioPec: "sim",
    formatoPec: "radio button",
    tabela: "tb_vacinacao",
    coluna: "no_condicao_maternal",
    formatoBd: "character varying(20)",
    obrigatorioBd: "não",
  },
  {
    tipo: "dado",
    campo: "Viajante",
    obrigatorioPec: "não",
    formatoPec: "check box",
    tabela: "tb_vacinacao",
    coluna: "st_viajante",
    formatoBd: "integer",
    obrigatorioBd: "não",
  },
];
export default [
  {
    tipo: "dado",
    campo: "Estratégia",
    obrigatorioPec: "sim",
    formatoPec: "combo box",
    tabela: "tb_registro_vacinacao",
    coluna: "co_estrategia_vacinacao",
    formatoBd: "bigint",
    obrigatorioBd: "não",
  },
  {
    tipo: "dado",
    campo: "Aprazar para",
    obrigatorioPec: "sim",
    formatoPec: "dd/mm/aaaa",
    tabela: "tb_registro_vacinacao",
    coluna: "dt_aprazamento",
    formatoBd: "date",
    obrigatorioBd: "não",
  },
];
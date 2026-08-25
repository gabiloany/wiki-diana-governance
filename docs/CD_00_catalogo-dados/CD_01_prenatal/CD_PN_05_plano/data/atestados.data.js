export default [
  {
    tipo: "dado",
    campo: "Modelo",
    obrigatorioPec: "sim",
    formatoPec: "combo box",
    tabela: "tb_atestado",
    coluna: "tp_atestado",
    formatoBd: "integer",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Data",
    obrigatorioPec: "sim",
    formatoPec: "dd/mm/aaaa",
    tabela: "tb_atestado",
    coluna: "dt_afastamento",
    formatoBd: "timestamp without time zone",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Hora",
    obrigatorioPec: "sim",
    formatoPec: "hh:mi",
    tabela: "tb_atestado",
    coluna: "dt_afastamento",
    formatoBd: "timestamp without time zone",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Dias",
    obrigatorioPec: "sim",
    formatoPec: "numérico",
    tabela: "tb_atestado",
    coluna: "nu_dias",
    formatoBd: "integer",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "CID10",
    obrigatorioPec: "não",
    formatoPec: "combo box",
    tabela: "tb_atestado",
    coluna: "co_cid10",
    formatoBd: "bigint",
    obrigatorioBd: "não"
  }
];
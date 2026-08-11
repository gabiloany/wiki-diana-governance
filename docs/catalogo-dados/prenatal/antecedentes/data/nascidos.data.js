export default [
  {
    tipo: "dado",
    campo: "Vivos",
    obrigatorioPec: "não",
    formatoPec: "numérico",
    tabela: ["tb_antecedente_item", "tb_antecedente"],
    coluna: ["ds_valor_item", "qt_nascidos_vivos"],
    formatoBd: ["varchar(4000)", "varchar(255)"],
    obrigatorioBd: "não",
  },
  {
    tipo: "dado",
    campo: "Mortos",
    obrigatorioPec: "não",
    formatoPec: "numérico",
    tabela: ["tb_antecedente_item", "tb_antecedente"],
    coluna: ["ds_valor_item", "ds_natimorto"],
    formatoBd: ["varchar(4000)", "varchar(255)"],
    obrigatorioBd: "não",
  },
];
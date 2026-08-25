export default [
  {
    tipo: "dado",
    campo: "Cidadão",
    obrigatorioPec: "não",
    formatoPec: "livre",
    tabela: ["tb_antecedente_item", "tb_antecedente"],
    coluna: ["ds_valor_item", "ds_observacao"],
    formatoBd: "varchar(4000)",
    obrigatorioBd: "não",
  },
];
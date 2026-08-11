export default [
  {
    tipo: "dado",
    campo: "Menos de 2500g",
    obrigatorioPec: "não",
    formatoPec: "numérico",
    tabela: ["tb_antecedente_item", "tb_antecedente"],
    coluna: ["ds_valor_item", "ds_recem_nascido"],
    formatoBd: ["varchar(4000)", "varchar(255)"],
    obrigatorioBd: "não",
  },
  {
    tipo: "dado",
    campo: "Mais de 4500g",
    obrigatorioPec: "não",
    formatoPec: "numérico",
    tabela: "tb_antecedente",
    coluna: "qt_recem_nascido_acima",
    formatoBd: "varchar(255)",
    obrigatorioBd: "não",
  },
];
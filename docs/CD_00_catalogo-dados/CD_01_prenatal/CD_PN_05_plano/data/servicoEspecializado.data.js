export default [
  {
    tipo: "dado",
    campo: "Especialidade",
    obrigatorioPec: "sim",
    formatoPec: "combo box",
    tabela: "tb_encaminhamento",
    coluna: "co_especialidade_sisreg",
    formatoBd: "bigint",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Complemento",
    obrigatorioPec: "não",
    formatoPec: "livre",
    tabela: "tb_encaminhamento",
    coluna: "ds_complemento",
    formatoBd: "character varying(200)",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Hipótese/Diagnóstico (CID10)",
    obrigatorioPec: "sim",
    formatoPec: "combo box",
    tabela: "tb_encaminhamento",
    coluna: "co_cid10",
    formatoBd: "bigint",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Classificação de risco",
    obrigatorioPec: "sim",
    formatoPec: "radio box",
    tabela: "tb_encaminhamento",
    coluna: "co_classificacao_risco_encam",
    formatoBd: "bigint",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Motivo de encaminhamento",
    obrigatorioPec: "não",
    formatoPec: "livre",
    tabela: "tb_encaminhamento",
    coluna: "ds_motivo_encaminhamento",
    formatoBd: "text",
    obrigatorioBd: "não"
  },
  {
    tipo: "dado",
    campo: "Observações",
    obrigatorioPec: "não",
    formatoPec: "livre",
    tabela: "tb_encaminhamento",
    coluna: "ds_observacao",
    formatoBd: "text",
    obrigatorioBd: "não"
  }
];
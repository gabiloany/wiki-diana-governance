export default [
  {
    tipo: "dado",
    campo: "Procedimentos administrativos (SIGTAP)",
    obrigatorioPec: "não",
    formatoPec: "combo box",
    tabela: "rl_atend_proced",
    coluna: "co_proced",
    formatoBd: "bigint",
    obrigatorioBd: "sim"
  },
  {
    tipo: "dado",
    campo: "Ficha de notificação de caso suspeito",
    obrigatorioPec: "não",
    formatoPec: "combo box",
    tabela: "tb_sinan_notificacao_evolucao",
    coluna: "co_sinan_notificacao",
    formatoBd: "bigint",
    obrigatorioBd: "sim"
  },
  {
    tipo: "dado",
    campo: "Racionalidade em saúde (Exceto alopatia/convencional)",
    obrigatorioPec: "não",
    formatoPec: "combo box",
    tabela: "tb_atend_prof",
    coluna: "co_racionalidade_saude",
    formatoBd: "bigint",
    obrigatorioBd: "sim"
  },
  {
    tipo: "dado",
    campo: "Conduta",
    obrigatorioPec: "sim",
    formatoPec: "check box",
    tabela: "rl_atend_prof_conduta",
    coluna: "tp_cds_conduta",
    formatoBd: "bigint",
    obrigatorioBd: "sim"
  },
  {
    tipo: "dado",
    campo: "Desfecho do atendimento",
    obrigatorioPec: "sim",
    formatoPec: "radio button",
    tabela: "rl_atend_proced",
    coluna: "co_proced",
    formatoBd: "bigint",
    obrigatorioBd: "sim"
  }
];
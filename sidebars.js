// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro_geral',

    {
      type: 'category',
      label: 'Boas Práticas de Governança de Dados',

      // Página introdutória de Boas Práticas
      link: {
        type: 'doc',
        id: 'BP_00_boas-praticas/intro_boas_praticas',
      },

      items: [
        'BP_00_boas-praticas/BP_01_intro-diretrizes/index',
        'BP_00_boas-praticas/BP_02_glossario/index',
        'BP_00_boas-praticas/BP_03_tratamento-dados/index',
        'BP_00_boas-praticas/BP_04_agentes-tratamento/index',
        'BP_00_boas-praticas/BP_05_responsabilidades-papeis/index',
        'BP_00_boas-praticas/BP_06_fluxo-gestao/index',
        'BP_00_boas-praticas/BP_07_interoperabilidade-integracao/index',
        'BP_00_boas-praticas/BP_08_informacao-saude/index',
        'BP_00_boas-praticas/BP_09_arcabouco-digital/index',
      ],
    },

    {
      type: 'category',
      label: 'Catálogo de Dados',

      // Página introdutória do catálogo
      link: {
        type: 'doc',
        id: 'CD_00_catalogo-dados/intro_catalogo',
      },

      items: [
        {
          type: 'category',
          label: 'Pré-Natal',

          // Página introdutória do Pré-Natal
          link: {
            type: 'doc',
            id: 'CD_00_catalogo-dados/CD_01_prenatal/intro_prenatal',
          },

          items: [
            'CD_00_catalogo-dados/CD_01_prenatal/CD_PN_01_antecedentes/index',
            'CD_00_catalogo-dados/CD_01_prenatal/CD_PN_02_subjetivo/index',
            'CD_00_catalogo-dados/CD_01_prenatal/CD_PN_03_objetivo/index',
            'CD_00_catalogo-dados/CD_01_prenatal/CD_PN_04_avaliacao/index',
            'CD_00_catalogo-dados/CD_01_prenatal/CD_PN_05_plano/index',
            'CD_00_catalogo-dados/CD_01_prenatal/CD_PN_06_finalizacao/index',
          ],
        },

        {
          type: 'category',
          label: 'Câncer de Colo do Útero',

          // Página introdutória do Câncer de Colo do Útero
          link: {
            type: 'doc',
            id: 'CD_00_catalogo-dados/CD_02_cancer-colo-utero/intro_cancer_colo_utero',
          },

          items: [
            'CD_00_catalogo-dados/CD_02_cancer-colo-utero/CD_CCU_01_cadastro/index',
            'CD_00_catalogo-dados/CD_02_cancer-colo-utero/CD_CCU_02_objetivo/index',
            'CD_00_catalogo-dados/CD_02_cancer-colo-utero/CD_CCU_03_plano/index',
          ],
        },

        {
          type: 'category',
          label: 'Vacinação',

          // Página introdutória da Vacinação
          link: {
            type: 'doc',
            id: 'CD_00_catalogo-dados/CD_03_vacinacao/intro_vacinacao',
          },

          items: [
            'CD_00_catalogo-dados/CD_03_vacinacao/CD_VAC_01_caderneta/index',
            'CD_00_catalogo-dados/CD_03_vacinacao/CD_VAC_02_covid/index',
            'CD_00_catalogo-dados/CD_03_vacinacao/CD_VAC_03_imunobiologico/index',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',

    {
      type: 'category',
      label: 'Boas Práticas de Governança de Dados',

      // Página introdutória de Boas Práticas
      link: {
        type: 'doc',
        id: 'boas-praticas/index',
      },

      items: [
        'boas-praticas/agentes-tratamento/index',
        'boas-praticas/fluxo-gestao/index',
        'boas-praticas/glossario/index',
        'boas-praticas/informacao-saude/index',
        'boas-praticas/interoperabilidade-integracao/index',
        'boas-praticas/responsabilidades-papeis/index',
        'boas-praticas/tratamento-dados/index',
      ],
    },

    {
      type: 'category',
      label: 'Catálogo de Dados',

      // Página introdutória do catálogo
      link: {
        type: 'doc',
        id: 'catalogo-dados/index',
      },

      items: [
        {
          type: 'category',
          label: 'Pré-Natal',

          // Página introdutória do Pré-Natal
          link: {
            type: 'doc',
            id: 'catalogo-dados/prenatal/index',
          },

          items: [
            'catalogo-dados/prenatal/antecedentes/index',
            'catalogo-dados/prenatal/subjetivo/index',
            'catalogo-dados/prenatal/objetivo/index',
            'catalogo-dados/prenatal/avaliacao/index',
            'catalogo-dados/prenatal/plano/index',
            'catalogo-dados/prenatal/finalizacao/index',
          ],
        },

        {
          type: 'category',
          label: 'Câncer de Colo de Útero',

          // Página introdutória do Câncer de Colo de Útero
          link: {
            type: 'doc',
            id: 'catalogo-dados/cancer-colo-utero/index',
          },

          items: [
            'catalogo-dados/cancer-colo-utero/cadastro',
            'catalogo-dados/cancer-colo-utero/objetivo',
            'catalogo-dados/cancer-colo-utero/plano',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Vacinação',

      // Página introdutória da Vacinação
      link: {
        type: 'doc',
        id: 'vacinacao/index',
      },

      items: [
        'vacinacao/cardeneta/index',
        'vacinacao/covid/index',
        'vacinacao/imunobiologico/index',
      ],
    },
  ],
};

export default sidebars;
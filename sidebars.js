// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',

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
  ],
};

export default sidebars;
// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Catálogo de Dados',
      items: [
        {
          type: 'category',
          label: 'Pré-Natal',
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

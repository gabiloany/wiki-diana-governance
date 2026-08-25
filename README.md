## 🛠️ Documentação técnica

Este site é construído com [Docusaurus](https://docusaurus.io/), gerador de sites estáticos baseado em React/Markdown.

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- [Yarn](https://yarnpkg.com/) (gerenciador de pacotes usado no projeto)

### Instalação

```bash
yarn
```

### Ambiente de desenvolvimento local

```bash
yarn start
```

Inicia um servidor local e abre uma janela do navegador. A maioria das alterações é refletida automaticamente, sem necessidade de reiniciar o servidor.

### Build de produção

```bash
yarn build
```

Gera o conteúdo estático na pasta `build/`, pronto para ser servido por qualquer serviço de hospedagem estática.

### Deploy

O deploy é automatizado via **GitHub Actions** (`.github/workflows/deploy.yml`): a cada push na branch `main`, o site é buildado e publicado automaticamente no GitHub Pages.

Para deploy manual (alternativa ao pipeline automático):

```bash
# Usando SSH
USE_SSH=true yarn deploy

# Sem SSH
GIT_USER=<seu usuário do GitHub> yarn deploy
```

### Estrutura do projeto

```
docs/
  │   intro_geral.md                  # Página inicial do site (slug: /)
  │
  ├── BP_00_boas-praticas/            # Boas Práticas de Governança de Dados
  │   │   intro_boas_praticas.md      # Página índice da seção
  │   ├── BP_01_intro-diretrizes/
  │   ├── BP_02_glossario/
  │   ├── BP_03_tratamento-dados/
  │   ├── BP_04_agentes-tratamento/
  │   ├── BP_05_responsabilidades-papeis/
  │   ├── BP_06_fluxo-gestao/
  │   ├── BP_07_interoperabilidade-integracao/
  │   ├── BP_08_informacao-saude/
  │   └── BP_09_arcabouco-digital/
  │       ├── index.mdx
  │       └── data/
  │           └── referencias.data.js
  │
  └── CD_00_catalogo-dados/           # Catálogo de Dados (Prontuário Eletrônico e-SUS APS)
      │   intro_catalogo.md           # Página índice da seção
      │
      ├── CD_01_prenatal/
      │   │   intro_prenatal.md
      │   ├── CD_PN_01_antecedentes/{index.mdx, data/*.data.js}
      │   ├── CD_PN_02_subjetivo/{index.mdx, data/*.data.js}
      │   ├── CD_PN_03_objetivo/{index.mdx, data/*.data.js}
      │   ├── CD_PN_04_avaliacao/{index.mdx, data/*.data.js}
      │   ├── CD_PN_05_plano/{index.mdx, data/*.data.js}
      │   └── CD_PN_06_finalizacao/{index.mdx, data/*.data.js}
      │
      ├── CD_02_cancer-colo-utero/
      │   │   intro_cancer_colo_utero.md
      │   ├── CD_CCU_01_cadastro/{index.mdx, data/*.data.js}
      │   ├── CD_CCU_02_objetivo/{index.mdx, data/*.data.js}
      │   └── CD_CCU_03_plano/{index.mdx, data/*.data.js}
      │
      └── CD_03_vacinacao/
          │   intro_vacinacao.md
          ├── CD_VAC_01_caderneta/{index.mdx, data/*.data.js}
          ├── CD_VAC_02_covid/{index.mdx, data/*.data.js}
          └── CD_VAC_03_imunobiologico/{index.mdx, data/*.data.js}
```

> 💡 **Padrão de conteúdo:** cada subtópico (ex: `CD_PN_02_subjetivo`) é composto por um `index.mdx` (o texto/estrutura da página) e uma pasta `data/` com um ou mais arquivos `*.data.js`, contendo os dados estruturados (mapeamento de campos da tela ↔ tabela/coluna do banco) consumidos pelo componente `TabelaMapeamento`.
>
> 💡 **Padrão de nomenclatura:** as pastas usam prefixos (`BP_`, `CD_`, `CD_PN_`, `CD_CCU_`, `CD_VAC_`) seguidos de número sequencial para manter a ordem visual no explorador de arquivos. A ordem exibida no menu lateral do site é sempre controlada pelo array `items` em `sidebars.js` — os prefixos não afetam a navegação, apenas a organização local.

```
src/
  ├── components/                     # Componentes React customizados
  │   ├── Figura/                      # Imagens/prints do sistema, com legenda padronizada
  │   ├── ImagemInline/                 # Imagens exibidas em linha com o texto (ex: ícones inline)
  │   ├── Referencias/                  # Citações e referências bibliográficas
  │   └── TabelaMapeamento/             # Tabela de mapeamento Prontuário Eletrônico e-SUS APS ↔ Banco de Dados
  └── css/
      ├── custom.css                   # Estilos globais do tema
      └── fonts/                        # Fonte customizada Rawline (todos os pesos, regular e itálico)

static/
  └── img/                             # Espelha a estrutura de docs/ por seção e subtópico
      ├── home/                         # Favicon e logo institucionais
      ├── boas-praticas/                # Imagens de apoio da seção de Boas Práticas
      ├── prenatal/
      │   ├── antecedentes/  ├── subjetivo/  ├── objetivo/
      │   ├── avaliacao/     └── plano/      └── finalizacao/
      ├── cancer/
      │   ├── cadastro/  ├── objetivo/  └── plano/
      └── vacinacao/                    # Imagens soltas (sem subpastas por etapa)
```

> 💡 Cada pasta de imagens em `static/img/` corresponde a um subtópico em `docs/`, facilitando localizar o print certo ao editar uma página específica.

### Configuração principal

- `docusaurus.config.js` — configurações gerais do site (título, URL, navbar, footer, tema, `showLastUpdateTime`/`showLastUpdateAuthor`)
- `sidebars.js` — estrutura de navegação da documentação (define hierarquia e ordem das páginas no menu lateral)
- `.github/workflows/deploy.yml` — pipeline de build e deploy automático no GitHub Pages (checkout com `fetch-depth: 0` para preservar o histórico do Git, necessário para `showLastUpdateTime`)

### Padrão de frontmatter

Todo arquivo `.md`/`.mdx` deve começar com um bloco de metadados no topo:

```md
---
title: Nome da Página
description: Uma frase curta resumindo o conteúdo (opcional, recomendado em páginas de índice)
---
```

- `title` — sempre obrigatório; define o título da página e da aba do navegador.
- `description` — opcional; usado em SEO e pré-visualização de links.
- A **ordem e hierarquia** das páginas no menu lateral são definidas em `sidebars.js`, não pelo frontmatter.
- A **data/autor de última atualização** é obtida automaticamente do histórico do Git (via `showLastUpdateTime`/`showLastUpdateAuthor`), sem necessidade de campo manual no frontmatter.

### Suporte

Dúvidas técnicas ou problemas com o repositório podem ser reportados para:
📧 **gabrielle.couto@einstein.com**

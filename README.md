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
docs/                    # Conteúdo das páginas (Markdown/MDX)
  ├── catalogo-dados/
  ├── openmetadata/
  └── pec/
      ├── cancer-colo-utero/
      └── prenatal/
          ├── antecedentes/
          ├── subjetivo/
          ├── objetivo/
          ├── avaliacao/
          ├── plano/
          └── finalizacao/
 
src/
  ├── components/         # Componentes React customizados
  │   ├── CampoBanco/      # Exibição de campos do banco de dados
  │   ├── CampoPEC/        # Exibição de campos do sistema PEC
  │   ├── Figura/          # Componente de imagens/prints do sistema
  │   ├── Fluxograma/      # Diagramas de fluxo
  │   ├── HomepageFeatures/# Cards institucionais da home
  │   ├── TabelaMapeamento/# Tabela de mapeamento PEC ↔ Banco de Dados
  │   └── VideoTutorial/   # Player de vídeo introdutório por seção
  ├── css/                 # Estilos globais (custom.css)
  ├── pages/               # Páginas customizadas (ex: Equipe)
  └── theme/               # Componentes do tema ejetados (ex: Footer)
 
static/
  ├── img/                 # Imagens e logos institucionais
  └── videos/              # Vídeos tutoriais das telas do sistema
```
 
### Configuração principal
 
- `docusaurus.config.js` — configurações gerais do site (título, URL, navbar, footer, tema)
- `sidebars.js` — estrutura de navegação da documentação

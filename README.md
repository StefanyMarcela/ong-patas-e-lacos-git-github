# ONG Patas & Laços 🐾

## Sobre o projeto

O projeto **ONG Patas & Laços** foi desenvolvido como atividade acadêmica da disciplina de **Desenvolvimento Front-End para Web**, como parte da **Experiência Prática IV**.

O site apresenta uma ONG fictícia voltada à proteção e ao bem-estar dos animais, mostrando seus projetos e permitindo que pessoas interessadas realizem um cadastro para participar das ações.

Nesta etapa, o projeto foi aprimorado com práticas de desenvolvimento mais próximas de um fluxo profissional, incluindo controle de versões com Git e GitHub, organização por branches utilizando GitFlow, melhorias de acessibilidade, otimizações de carregamento, implantação em ambiente de produção e documentação técnica.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- DOM
- History API
- localStorage
- ViaCEP API
- Git
- GitHub
- Vercel

## Páginas

- **Início:** apresentação da ONG, informações institucionais, indicadores e dados de contato.
- **Projetos:** apresentação das principais iniciativas da ONG por meio de cards.
- **Cadastro:** formulário para pessoas interessadas em participar das ações.

## Funcionalidades

- Navegação dinâmica entre as páginas.
- Estrutura de Single Page Application (SPA).
- Renderização das páginas por meio de templates JavaScript.
- Manipulação do DOM.
- Navegação utilizando History API.
- Interceptação dos links de navegação.
- Máscara para CPF, telefone e CEP.
- Preenchimento automático de endereço por meio do CEP.
- Consulta de endereço utilizando a API ViaCEP.
- Validação dos campos do formulário.
- Validação de e-mail.
- Prevenção do envio padrão do formulário.
- Mensagem de confirmação após o cadastro.
- Armazenamento dos cadastros utilizando localStorage.
- Possibilidade de armazenar múltiplos cadastros.
- Limpeza do formulário após o cadastro.
- Cards para apresentação dos projetos.
- Menu hambúrguer para dispositivos menores.
- Layout responsivo.
- Efeitos de interação com `hover` e `focus`.
- Suporte à redução de movimentos para acessibilidade.

## Estrutura do projeto

O projeto foi organizado seguindo o princípio de **separation of concerns**, mantendo os arquivos separados de acordo com suas responsabilidades.

```text
ONG4/

├── index.html
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── style.css
├── imagens/
│   ├── adote.png
│   ├── campanha.png
│   ├── fundo.jpg
│   ├── ImgONG.jpg
│   └── resgate.jpg
├── js/
│   ├── app.js
│   └── script.js
└── README.md
```

O arquivo **`index.html`** localizado na raiz funciona como entrada para o deploy da aplicação na Vercel e direciona o acesso para a página principal localizada em `html/index.html`.

A **pasta `html`** contém os arquivos responsáveis pela estrutura das páginas.

A **pasta `css`** contém os estilos e o Design System da aplicação.

A **pasta `imagens`** armazena os recursos visuais utilizados no projeto.

A **pasta `js`** contém os arquivos responsáveis pelas funcionalidades e comportamentos interativos da aplicação.

## Design System

O projeto utiliza um Design System desenvolvido com **variáveis CSS**, permitindo maior organização e padronização dos elementos visuais.

### Cores

Foram definidas variáveis para cores primárias, secundárias, acentos, textos, fundo, bordas, sucesso e erro.

### Tipografia

O sistema possui cinco níveis de tamanhos tipográficos:

- Extra pequeno
- Pequeno
- Médio
- Grande
- Extra grande

### Espaçamento

Foi criada uma escala modular de espaçamentos por meio de variáveis CSS, utilizada em margens, preenchimentos e espaçamentos entre elementos.

### Layout

Foi utilizado **CSS Grid com 12 colunas** para a estrutura principal e para a organização dos cards de projetos.

O **Flexbox** foi utilizado em componentes que necessitam de alinhamento e distribuição interna, como navegação, formulários e indicadores.

## JavaScript e arquitetura

O JavaScript foi organizado de forma modular, separando as responsabilidades entre os arquivos.

O arquivo **`app.js`** concentra as principais funcionalidades da aplicação, como:

- Templates das páginas.
- Rotas da aplicação.
- Renderização dinâmica.
- Manipulação do DOM.
- Navegação com History API.
- Validação do formulário.
- Máscaras dos campos.
- Consulta à API ViaCEP.
- Armazenamento dos cadastros no localStorage.

O arquivo **`script.js`** é responsável pelo comportamento do menu hambúrguer e pela interação do menu em dispositivos menores.

Essa divisão facilita a manutenção, a depuração e a evolução do código.

## Git e GitFlow

O projeto utiliza **Git** para controle de versões.

Foi adotada uma estrutura baseada em **GitFlow**, utilizando branches para separar o desenvolvimento das funcionalidades.

Branches utilizadas:

- `main`: versão principal e estável do projeto.
- `develop`: branch utilizada para integração das funcionalidades.
- `feature/acessibilidade`: desenvolvimento das melhorias de acessibilidade.
- `feature/performance`: desenvolvimento das otimizações de desempenho.
- `release/v1.0.0`: preparação da versão final para publicação.

Também foi criada a tag **`v1.0.0`**, identificando a primeira versão de release do projeto.

Foram utilizados commits semânticos para identificar o objetivo de cada alteração, como:

- `chore: inicia projeto da Experiência Prática IV`
- `feat: melhora acessibilidade do menu e navegacao`
- `perf: otimiza carregamento das imagens`
- `docs: atualiza documentacao da Experiência Prática IV`
- `fix: ajusta entrada para deploy`

## Acessibilidade

Foram implementadas melhorias de acessibilidade com base em boas práticas relacionadas à **WCAG 2.1**, incluindo:

- Uso do atributo `lang="pt-BR"`.
- Textos alternativos nas imagens.
- Estrutura semântica em HTML5.
- Campos de formulário associados às respectivas labels.
- Navegação por teclado.
- Indicadores visuais de foco.
- Atributos `aria-label`, `aria-expanded` e `aria-controls` no menu hambúrguer.
- Atualização do estado do menu para tecnologias assistivas.
- Suporte à preferência de redução de movimentos.
- Contraste adequado entre textos e fundos.

As melhorias foram implementadas buscando aproximar a aplicação de boas práticas de acessibilidade, sem afirmar uma certificação formal de conformidade WCAG.

## Otimização e desempenho

Foram realizadas melhorias para otimizar o carregamento dos recursos da aplicação.

As imagens utilizadas na página de projetos receberam o atributo `loading="lazy"`, permitindo que sejam carregadas conforme se aproximam da área visível da página.

Também foram definidas dimensões `width` e `height` nas imagens para que o navegador consiga reservar o espaço necessário antes do carregamento dos arquivos, reduzindo mudanças inesperadas no layout.

## Responsividade

O layout possui breakpoints para diferentes tamanhos de tela:

- Desktop
- Tablet
- Celular
- Celulares pequenos

As estruturas são adaptadas para proporcionar uma experiência adequada em diferentes dispositivos.

## Deploy

A aplicação foi publicada utilizando a plataforma **Vercel**, conectada ao repositório do projeto no GitHub.

A versão principal da aplicação é disponibilizada a partir da branch `main`.

O deploy foi realizado e testado em ambiente de produção, verificando o carregamento da página inicial, da página de projetos e da página de cadastro.

## Como executar o projeto

1. Baixe ou clone o repositório.
2. Abra a pasta `ONG4` no Visual Studio Code.
3. Abra o arquivo `html/index.html`.
4. Execute o projeto utilizando uma extensão de servidor local, como o Live Server.
5. Acesse a aplicação pelo navegador.

## Créditos das imagens

As imagens utilizadas no projeto foram geradas com auxílio de ferramentas de inteligência artificial (IA). Elas foram utilizadas para fins acadêmicos e demonstrativos, compondo o conteúdo visual do site fictício da ONG Patas & Laços.

## Autoria

Projeto acadêmico desenvolvido por **Stefany Marcela**.
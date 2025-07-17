# Avaliação do Projeto Final

**Notas**

- Alexandre: 7,1
- Leonardo: 7,6
- Lucas: 7,1

## Requisitos Funcionais

- **RF1 O sistema deve permitir buscar cidades pelo nome, com validação de erros.**
  - Comentário: Atendido.

- **RF2 O sistema deve exibir os dados do clima atual: temperatura, sensação térmica, umidade, vento, descrição e ícone.**
  - Comentário: Atendido.

- **RF3 O sistema deve apresentar a previsão do tempo para os próximos cinco dias.**
  - Comentário: Atendido.

- **RF4 O sistema deve manter um histórico das últimas cidades; ao selecionar uma dessas cidades, os dados do clima devem ser atualizados e exibidos.**
  - Comentário: Atendido.

* **RF5 O sistema deve possuir interface responsiva, adaptável a diferentes tamanhos de tela.**
  - Comentário: Atendido.

## Requisitos Não Funcionais

- **RNF1 O projeto deve ser implementado com React + TypeScript.**
  - Comentário: Atendido.

- **RNF2 O código deve estar organizado em módulos e componentes reutilizáveis.**
  - Comentário: Parcialmente atendido.
    - Arquivos de componentes e de testes todos no mesmo local. Poderia ter feito uma pasta para cada componente com seu respectivo teste ou separar os testes dos componentes.

- **RNF3 A aplicação deve ser executada via servidor local (vite, react-scripts ou similar).**
  - Comentário: Atendido.

- **RNF4 O arquivo tsconfig.json deve estar configurado com tipagem estrita.**
  - Comentário: Não atendido.

- **RNF5 O código deve seguir boas práticas de clareza, legibilidade e organização.**
  - Comentário: ver a seção sobre qualidade de código abaixo.

- **RNF6 Cada componente deve ter pelo menos dois testes unitários.**
  - Comentário: Não atendido.
    - Os testes foram criados, mas com erro na execução.

- **RNF7 O documento package.json deve conter os seguintes scripts:**\
  (a) dev: para iniciar o servidor de desenvolvimento.\
  (b) build: para gerar a versão de produção.\
  (c) test: para executar os testes unitários.\
  (d) lint: para verificar a qualidade do código.\
  (e) format: para formatar o código.
  - Comentário: Não atendido.

- **RNF8 O projeto deve conter um README.md atualizado com:**\
  (a) Nome dos responsáveis.\
  (b) Descrição da aplicação.\
  (c) Estrutura do projeto.\
  (d) Tecnologias utilizadas.\
  (e) Origem dos dados (API utilizada).\
  (f) Funcionalidades extras implementadas.
  - Comentário: Parcialmente atendido.
    - O uso de `Lucide` não foi mencionado.

- **RNF9 A aplicação deve utilizar uma API pública de clima (ver sugestões abaixo)**
  - Comentário: Atendido.

- **RNF10 A chave de acesso à API deve ser mantida em um arquivo de configuração e não deve ser exposta no código-fonte.**
  - Comentário: Atendido.

## Funcionalidades Extras

Funcionalidades implementadas:

FE1 Tema escuro/claro.
FE2 Detecção automática de localização.
FE3 Imagem de fundo dinâmica integrada com o clima atual.
FE4 Exportação da previsão em PDF.
FE5 Gráfico de temperatura dos últimos dias.

## Qualidade do Código

- **QA1 Todas as variáveis, funções e componentes devem estar devidamente tipados.**
  - Comentário: Atendido.

- **QA2 Interfaces e tipos personalizados devem ser utilizados para representar os dados.**
  - Comentário: Atendido.
- **QA3 Variáveis, funções e componentes devem ter nomes claros, descritivos e padronizados.**
  - Comentário: Atendido.
- **QA4 Cada função deve ter apenas uma responsabilidade.**
  - Comentário: Atendido.
- **QA5 Deve-se evitar funções longas ou com blocos de lógica aninhada complexa (máximo dois níveis de aninhamento).**
  - Comentário: Atendido.
- **QA6 Os módulos devem ter responsabilidades bem definidas.**
  - Comentário: Atendido.
- **QA7 Deve-se evitar repetição de código e promover a reutilização por meio de funções utilitárias.**
  - Comentário: Atendido.
- **QA8 Funções não utilizadas e mensagens de depuração devem ser removidas.**
  - Comentário: Atendido.
- **QA9 O tipo genérico any deve ser evitado.**
  - Comentário: Atendido.

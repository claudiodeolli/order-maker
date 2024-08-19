# Order Maker - Lista com Infinite Scroll e Ações em Massa

## Visão Geral do Projeto

Order Maker é um projeto desenvolvido para gerenciar uma lista de pedidos com funcionalidades avançadas, como scroll infinito, edição de status, e execução de ações em massa. O projeto integra um front-end em React com um back-end em NestJS, utilizando o Prisma para gerenciamento de banco de dados, e Radix para componentes acessíveis e estilizados.

### Funcionalidades Principais

- **Infinite Scroll:** Carregamento contínuo de pedidos conforme o usuário rola a página.
- **Mudança de Status:** Permite a edição do status de pedidos individuais ou em massa.
- **Ações em Massa:** Realize ações em múltiplos pedidos simultaneamente.
- **Integração com API:** A comunicação com o servidor é feita via API, garantindo eficiência e escalabilidade.

## Stack Tecnológica

- **NestJS:** Framework robusto para construção do back-end em Node.js, facilitando a criação de APIs escaláveis e bem estruturadas.
- **React:** Biblioteca JavaScript para construção de interfaces de usuário dinâmicas e responsivas.
- **Prisma:** ORM moderno para interagir com o banco de dados PostgreSQL, permitindo consultas eficientes e tipagem forte.
- **Radix:** Conjunto de componentes acessíveis e sem estilo para React, que facilita a construção de interfaces personalizadas.
- **PostgreSQL:** Banco de dados relacional utilizado para armazenar e gerenciar os dados dos pedidos.

## Configuração do Ambiente

### Pré-requisitos

- **Node.js:** Certifique-se de ter o Node.js instalado em sua máquina.
- **PostgreSQL:** Instale o PostgreSQL para gerenciar o banco de dados localmente.

### Passos para Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/order-maker.git
   ```

2. **Instalação das Dependências:**

   Navegue até as pastas do servidor e cliente para instalar as dependências:

   ```bash
   cd order-maker/server
   npm install

   cd ../client
   npm install
   ```

3. **Configuração do Banco de Dados:**

   Crie um banco de dados no PostgreSQL utilizando as informações fornecidas no arquivo `.env` do projeto server:

   ```plaintext
   DATABASE_URL="postgresql://postgres:test@localhost:5432/ordermaker?schema=public"
   ```

4. **Executar as Seeds do Banco de Dados:**

   É altamente recomendado rodar as seeds para popular o banco de dados com dados iniciais:

   ```bash
   cd server
   npm run seed
   ```

5. **Iniciar o Projeto:**

   Inicie o servidor e o cliente em terminais separados:

   ```bash
   # No terminal do servidor
   cd server
   npm start

   # No terminal do cliente
   cd ../client
   npm start
   ```

6. **Acessar a Aplicação:**

   Abra o navegador e acesse o front-end da aplicação em `http://localhost:3000`.

## Considerações Finais

Este projeto foi criado para oferecer uma solução robusta e escalável para gerenciar listas de pedidos com grande volume de dados. Com a stack escolhida, garantimos uma aplicação moderna, eficiente e de fácil manutenção. Sinta-se à vontade para explorar o código e contribuir com melhorias!

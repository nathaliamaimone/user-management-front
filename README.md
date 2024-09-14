# Cadastro de Usuários

Este é um projeto simples em React que permite cadastrar e listar usuários. Os dados dos usuários são armazenados em um backend, e o frontend interage com este backend para criar e excluir usuários.

## Tecnologias Utilizadas

- React
- CSS
- Axios (para chamadas API)
- Node.js (para backend, se aplicável)

## Funcionalidades

- **Cadastro de Usuários**: Adiciona novos usuários fornecendo nome, idade e email.
- **Listagem de Usuários**: Exibe uma lista de usuários cadastrados.
- **Exclusão de Usuários**: Permite excluir usuários da lista.

## Estrutura do Projeto

- `Home.js`: Componente principal da aplicação, responsável pelo cadastro, listagem e exclusão de usuários.
- `style.css`: Arquivo de estilos para o componente `Home`.

## Instalação

Para rodar este projeto localmente, siga os seguintes passos:

1. Clone o repositório.
2. Navegue até o diretório do projeto.
3. Instale as dependências: npm install
4. Inicie o servidor de desenvolvimento: npm run dev


## Instalação do Backend

A aplicação interage com uma API para gerenciar usuários. Certifique-se de que o backend está configurado e funcionando conforme esperado. O projeto do backend pode ser encontrado [neste repositório](https://github.com/nathaliamaimone/user-api-service).

### Rotas da API

- `GET /usuarios`: Retorna a lista de usuários.
- `POST /usuarios`: Cria um novo usuário.
- `DELETE /usuarios/:id`: Exclui um usuário pelo ID.

Certifique-se de que o backend está rodando e acessível para que o frontend funcione corretamente.
# Modelism Véiaco

## Introdução
Projeto realizado afim de facilitar o controle das coleções de um usuário (miniaturas de trens e carros). Possui todo o CRUD de um
usuário assim como a sua autenticação. Possui o CRUD dos trens e dos carros.

## Rodando a aplicação (Passo a passo)
Faça o clone do repositório em sua máquina

Em seu terminal instale as dependências: npm install

Crie seu banco de dados e manipule o arquivo .env seguindo o .env.example não esqueça de adicionar uma SECRET_KEY

Para criar as migrações rode o comando: npx prisma migrate dev

Rode a aplicação: npm run start:dev

## Endpoints:

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /users                     | Criação de usuário                                | Qualquer usuário, não necessita token  |
| GET    | /users                     | Lista todos os usuário                            | Qualquer usuário, não necessita token  |
| GET    | /users/:id                 | Lista o usuário passando o id                     | Qualquer usuário, necessita de token   |
| PATCH  | /users/:id                 | Atualiza um usuário                               | Usuário dono, necessita de token       |
| PATCH  | /users/:id/password        | Atualiza a senha de um usuário                    | Usuário dono, necessita de token       |
| DELETE | /users/:id                 | Realiza um delete no usuário                      | Usuário dono, necessita de token       |
| POST   | /login                     | Gera o token de autenticação                      | Qualquer usuário, não necessita token  |
| POST   | /trains                    | Criação de um trem                                | Qualquer usuário, necessita de token   |
| GET    | /trains                    | Lista todos os trens do usuário logado            | Qualquer usuário, necessita de token   |
| GET    | /trains/:id                | Lista o trem passando o id                        | Qualquer usuário, necessita de token   |
| PATCH  | /trains/:id                | Atualiza um trem                                  | Usuário dono, necessita de token       |
| DELETE | /trains/:id                | Deleta um trem                                    | Usuário dono, necessita de token       |
| POST   | /cars                      | Criação de um carro                               | Qualquer usuário, necessita de token   |
| GET    | /cars                      | Lista todos os carros do usuário logado           | Qualquer usuário, necessita de token   |
| GET    | /cars/:id                  | Lista o carro passando o id                       | Qualquer usuário, necessita de token   |
| PATCH  | /cars/:id                  | Atualiza um carro                                 | Usuário dono, necessita de token       |
| PATCH  | /cars/:id/clean            | Atualiza a chave lastClean de um carro            | Usuário dono, necessita de token       |
| DELETE | /trains/:id                | Deleta um carro                                   | Usuário dono, necessita de token       |

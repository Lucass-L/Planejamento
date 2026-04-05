import { createBaseController } from "../utils/controller.factory.js";

const usersDB = [
  {
    id: 1,
    name: "Lucas Silva",
    email: "lucas.silva@email.com",
    password: "123456",
    age: 25,
    cep: "95300-000",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    password: "abcdef",
    age: 30,
    cep: "01001-000",
  },
  {
    id: 3,
    name: "João Pereira",
    email: "joao.pereira@email.com",
    password: "senha123",
    age: 28,
    cep: "20040-020",
  },
  {
    id: 4,
    name: "Ana Costa",
    email: "ana.costa@email.com",
    password: "qwerty",
    age: 22,
    cep: "30130-110",
  },
  {
    id: 5,
    name: "Carlos Souza",
    email: "carlos.souza@email.com",
    password: "abc123",
    age: 35,
    cep: "40020-000",
  },
];

const userController = createBaseController(usersDB, "Users");

export default userController;

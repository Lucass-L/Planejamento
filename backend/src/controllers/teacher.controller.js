import { createBaseController } from "../utils/controller.factory.js";

const teachersDB = [
  {
    id: 1,
    name: "Lucas",
    subject: "Matematica",
  },
  {
    id: 2,
    name: "Pedro",
    subject: "Historia",
  },
  {
    id: 3,
    name: "Henrique",
    subject: "Filosofia",
  },
  {
    id: 4,
    name: "Luiz",
    subject: "Português",
  },
];

const teacherController = createBaseController(teachersDB, "Professor");

export default teacherController;

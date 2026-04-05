export const createBaseController = (database, entityName) => ({
  getAll: async (req, res) => {
    try {
      return res.status(200).json(database);
    } catch (error) {
      return res
        .status(500)
        .json({ error: `Erro ao buscar ${entityName}`, errorCode: error });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const findItem = database.find((i) => i.id === Number(id));
      if (!findItem) {
        return res.status(404).json({erro: 'Id não encontrado'});
      }
      return res.status(200).json(findItem);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  create: async (req, res) => {
    try {
      const { name, ...rest } = req.body;

      if (!name) {
        return res
          .status(400)
          .json({ error: `Os dados fornecidos para nome são inválidos` });
      }

      const newItem = {
        id: Date.now(),
        name,
        ...rest,
      };

      database.push(newItem);
      return res.status(201).json(newItem);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  remove: async (req, res) => {
    try {
      const { id } = req.params;
      const index = database.findIndex((item) => item.id === Number(id));
      if (index === -1) {
        return res.status(404).json({ error: `Id: ${id} não foi encontrado` });
      }
      database.splice(index, 1);
      return res
        .status(200)
        .json({ message: `${entityName} removido com sucesso!`});
    } catch (error) {
      return res.status(500).json(error);
    }
  },
});

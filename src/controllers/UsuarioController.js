import UsuarioModel from "../models/UsuarioModel.js";

const UsuarioController = {
    createNewUsuario: async (req, res) => {
        try {
            const { nome, email } = req.body;
            
            if (!nome || !email) {
                return res.status(400).json({ erro: "Nome e email são obrigatórios." });
            }

            const newUsuario = await UsuarioModel.create(nome, email);
            res.status(201).json(newUsuario);
        } catch (e) {
            console.error("Erro ao criar usuário:", e);
            res.status(500).json({ erro: "Falha ao criar usuário" });
        }
    },

    getAllUsuarios: async (req, res) => {
        try {
            const usuarios = await UsuarioModel.getAll();
            res.status(200).json(usuarios);
        } catch (e) {
            console.error("Erro ao listar usuários:", e);
            res.status(500).json({ erro: "Falha ao listar usuários" });
        }
    },

    updateUsuario: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, email } = req.body;

            const affectedRows = await UsuarioModel.update(id, nome, email);

            if (!affectedRows) {
                return res.status(404).json({ erro: "Usuário não encontrado" });
            }

            res.json({ mensagem: "Atualizado com sucesso" });
        } catch (e) {
            console.error("Erro ao atualizar usuário:", e);
            res.status(500).json({ erro: "Falha ao atualizar usuário" });
        }
    },

    deleteUsuario: async (req, res) => {
        try {
            const { id } = req.params;

            const affectedRows = await UsuarioModel.delete(id);

            if (!affectedRows) {
                return res.status(404).json({ erro: "Usuário não encontrado" });
            }

            res.json({ mensagem: "Deletado com sucesso" });
        } catch (e) {
            console.error("Erro ao deletar usuário:", e);
            res.status(500).json({ erro: "Falha ao deletar usuário" });
        }
    }
};

export default UsuarioController;
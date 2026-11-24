import { pool } from "../config/db.js"; 

const UsuarioModel = {
    create: async (nome, email) => {
        const [result] = await pool.query(
            "INSERT INTO usuarios (nome, email) VALUES (?, ?)", 
            [nome, email]
        );
        return { id: result.insertId, nome, email };
    },

    getAll: async () => {
        const [rows] = await pool.query("SELECT * FROM usuarios");
        return rows;
    },

    update: async (id, nome, email) => {
        const [result] = await pool.query(
            "UPDATE usuarios SET nome = COALESCE(?, nome), email = COALESCE(?, email) WHERE id = ?", 
            [nome || null, email || null, id]
        );
        return result.affectedRows;
    },

    delete: async (id) => {
        const [result] = await pool.query("DELETE FROM usuarios WHERE id = ?", [id]);
        return result.affectedRows;
    }
};

export default UsuarioModel;
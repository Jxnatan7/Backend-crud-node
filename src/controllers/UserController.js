import db from "../../db.js"

export const UserController = {
    getUsers: (req, res) => {   
        const query = "SELECT * FROM usuario"
    
        db.query(query, (err, data) => {
            if(err) return res.json(err)
    
            return res.status(200).json(data)
        })
    },

    addUser: (req, res) => {
        const query = "INSERT INTO usuario (nome, email, telefone, data_nascimento) VALUES (?)"

        const values = [
            req.body.nome,
            req.body.email,
            req.body.telefone,
            req.body.data_nascimento
        ]

        db.query(query, [values], (err) => {
            if (err) return res.json(err)

            return res.status(200).json("Usuário criado com sucesso!")
        })
    },

    updateUser: (req, res) => {
        const query = "UPDATE usuario SET nome = ?, email = ?, telefone = ?, data_nascimento = ? WHERE id = ?"

        const values = [
            req.body.nome,
            req.body.email,
            req.body.telefone,
            req.body.data_nascimento
        ]

        db.query(query, [...values, req.params.id], (err) => {
            if (err) return res.json(err)

            return res.status(200).json("Usuário atualizado com sucesso!")
        })
    },

    deleteUser: (req, res) => {
        const query = "DELETE FROM usuario WHERE id = ?"

        db.query(query, [req.params.id], (err) => {
            if (err) return res.json(err)

            return res.status(200).json("Usuário deletado com sucesso!")
        })
    }
} 

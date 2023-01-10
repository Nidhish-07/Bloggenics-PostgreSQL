import pool from "../queries.js"

export const getUsers = (req, res) => {
    pool.query("SELECT * FROM users WHERE ORDER BY id ASC", (error, results) => {
        if (error) {
            throw error;
        }

        res.status(200).json(results.rows)
    })
}

export const createUser = (req, res) => {
    const { name, email } = req.body

    pool.query("INSERT INTO users (name,email) VALUES ($1, $2) RETURNING *", [name, email], (error, results) => {
        if (error) {
            throw error;
        }

        res.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
}
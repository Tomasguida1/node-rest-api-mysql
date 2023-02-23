import {pool} from '../db.js'

export const index = (req, res) => res.json({ message: "welcome to my api" }); 

export const indexControllers = (req, res) => {
    const result = pool.query ("SELECT * FROM posts")
    res.json(result)
}
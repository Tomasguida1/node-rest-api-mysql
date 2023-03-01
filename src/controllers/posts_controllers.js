import {pool} from '../db.js'

export const getPosts = async (req, res) => {
    try{
    const [rows] = await pool.query("SELECT * FROM posts")
    res.json(rows)
    } catch (error){
        return res.status(500).json({message: "error"})
    }
    };
    export const getPost = async(req, res) => {
        try {
            const { idposts } = req.params;
            const [rows] = await pool.query('SELECT * FROM posts WHERE idposts = ?',[idposts])
        
            if  (rows.length <= 0) return res.status(404).json({message: "post not found"})
            res.json(rows[0])
        }catch(error){
            return res.status(500).json({message: "error"})
        }
        };

export const uplPosts = async (req, res) => {
    const {title, description, img,materials, stepbystep } = req.body
    try {

 const [rows] = await pool.query('INSERT INTO posts (title, description, img ,materials, stepbystep) VALUES (?, ?,?,?,?)',[title, description, img, ,materials, stepbystep ])
res.send({idpost : rows.insertId, title, description, img, materials, stepbystep})
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

export const updPosts =async(req, res) => {
    const {idposts} = req.params
    const {title, description, img,materials, stepbystep} = req.body
try {

    const result = await pool.query("UPDATE posts SET title = IFNULL(?,  title) , description = IFNULL(?,  description) , img = IFNULL(?,  img), ,materials = IFNULL(?,  materials), stepbystep = IFNULL(?,  stepbystep) WHERE idposts = ?", [title, description, img,,materials, stepbystep, idposts])
    if (result.affectedRows === 0) return res.status(404).json({message :"no encontrado"})
    const[rows] = await pool.query("SELECT * FROM posts where idposts = ?", [idposts])
    res.json(rows)
} catch (error) {
    return res.status(500).json({message: error})    
}
}

export const dltPosts = async(req, res) => {
    try {
        const result = await pool.query("DELETE FROM posts WHERE idposts = ?",[req.params.ids ]    ) 
if (result.affectedRows > 0) return res.status(404).json({message: "employee not found"})
res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error})         
    }
}

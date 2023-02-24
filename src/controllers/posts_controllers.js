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
    
        if  (rows.length <= 0) return res.status(404).json({message: "employee not found"})
        res.json(rows[0])
    }catch(error){
        return res.status(500).json({message: "error"})
    }

    };

export const uplPosts = async (req, res) => {
    const {title, description, img} = req.body
    try {

 const [rows] = await pool.query('INSERT INTO posts (title, description, img) VALUES (?, ?,?)',[title, description, img ])
res.send({idpost : rows.insertId, title, description, img})
    } catch (error) {
        return res.status(500).json({message: "error"})
    }
};

export const updPosts = async(req, res) => {

try {
    const {idposts} = req.params;
    const {title, description, img} = req.body;

    const [result] = await pool.query(
        "UPDATE posts SET title = IFNULL(?,  title) , description = IFNULL(?,  description) , img = IFNULL(?,  img) WHERE idposts = ?",
         [title, description, img, idposts]
         );
    if (result.affectedRows === 0)
         return res.status(404).json({message :"no encontrado"})
    const[rows] = await pool.query("SELECT * FROM posts WHERE idposts = ?", [idposts,])
    res.json(rows[0]);
} catch (error) {
    return res.status(500).json({message: "error"})    
}
};

export const dltPosts = async(req, res) => {
    try {
        const { idposts } = req.params;
        const result = await pool.query("DELETE FROM posts WHERE idposts = ?",[idposts]    ) 
if (result.affectedRows > 0) return res.status(404).json({message: "employee not found"})
res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: "error"})         
    }
};

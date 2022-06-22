//connecting to the database........
const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'puser',
//   host: 'localhost',
//   database: 'mvp',
//   password: 'asd123',
//   port: 5432,
// })

const pool = new Pool({
    // Format: postgres://user:password@host:5432/database
    
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

const passCheck = async (req, res) => {
    console.log("Checking user");
    try{
        const data = await pool.query('SELECT * FROM users');
        console.log(data);
        res.send(data);
    }
    catch (error){
        console.log(error);
    }
   
  }

const getBlogs = async (req, res) => {
    console.log("fetching Blogs");
    try{
        const data = await pool.query('SELECT * FROM blogs');
        res.send(data.rows);
    }
    catch (error){
        console.log(error);
    }
   
  }

const getBlogById = async (req, res) => {
    const id = req.params.id;
    console.log("fetching blog by id");
    try{
        const data = await pool.query('SELECT * FROM blogs WHERE blog_id = $1',[id]);
        res.send(data.rows);
        res.status(200);
    }
    catch (error){
        console.log(error);
    }
}

const createBlog = async (req, res) => {
    console.log("in create blog just before taking in req.body");
    const {user_id,blogDate,title,fileLoc} = req.body
    console.log(req.body);
    try{
        pool.query('INSERT INTO blogs (user_id,blogDate,title,fileLoc) VALUES ($1, $2, $3, $4)', [user_id,blogDate,title,fileLoc])
    }
    catch (error){
        console.log(error);
    }
}

const updateItem = async (req, res) => {
    console.log("in update query");
    const id = req.params.id;
    const {category_id,item,price,qty} = req.body;
    
    console.log(id);
    try{
        pool.query(
            'UPDATE items SET category_id = $1, item = $2, price = $3, qty = $4 WHERE item_id = $5', [category_id,item,price,qty,id]);
            console.log("fully updated");
    }
    catch (error) {
        console.log(error);
    }
}

const deleteItem = (req, res) => {
   const id = req.params.id
    console.log("Last id " + id);
    
    pool.query(
        `DELETE FROM items WHERE item_id = ${id}`, (err, results) => {
            if (err) {
                throw err
              }
              res.status(200).send(`Item deleted`)
        }
    )
}







module.exports = {
    passCheck,
    getBlogs,
    getBlogById,
    createBlog,
    updateItem,
    deleteItem
  }
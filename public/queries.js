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
    const {user_id,blogdate,title,fileloc} = req.body
    console.log(req.body);
    try{
        pool.query('INSERT INTO blogs (user_id,blogdate,title,fileloc) VALUES ($1, $2, $3, $4)', [user_id,blogdate,title,fileloc]);
        res.status(200);
    }
    catch (error){
        console.log(error);
    }
}

const updateBlog = async (req, res) => {
    console.log("in update query");
    const id = req.params.id;
    const {user_id,blogdate,title,fileloc} = req.body;
    
    console.log(id);
    try{
        pool.query(
            'UPDATE blogs SET user_id = $1, blogdate = $2, title = $3, fileloc = $4 WHERE blog_id = $5', [user_id,blogdate,title,fileloc,id]);
            res.status(200);
            console.log("fully updated");
    }
    catch (error) {
        console.log(error);
    }
}

const deleteBlog = (req, res) => {
   const id = req.params.id
    console.log("Last id " + id);
    
    pool.query(
        `DELETE FROM blogs WHERE blog_id = ${id}`, (err, results) => {
            if (err) {
                throw err
              }
              res.status(200).send(`Blog deleted`)
        }
    )
}







module.exports = {
    passCheck,
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
  }
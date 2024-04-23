const { response } = require("express")
const {poolool} = require("pg" )
  
const pool = new Pool({
    user:"testdb",
    password:"topsecret",
    host:"139.59.31.227",
    port:5432,
    database:"testdb"  
})

const createTblQry = 'CREATE TABLE accounts (
    user_id serial PRIMARY KEY, username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) UNIQUE NOT NULL);'

pool.query("createTblQry").then((Response)=> {
    console.log("Database table Created")
    console.log(response)
})
.catch((err)=> {
    console.log(err);
});

module.exports = pool;
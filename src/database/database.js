import mysql from "promise-mysql"   
import config from "../config"

const conn = mysql.createConnection({
    host :config.host,
    database:config.database,
    user:config.user,
    password : config.password

})

const getConnection=()=>{
    return conn
}

module.exports={
    getConnection
}
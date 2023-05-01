import mysql from "mysql"
import dotenv from "dotenv"

dotenv.config({
    path: ".env"
})

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

db.connect((err) => {
    if(err) console.log(err)
    console.log(`Conectado ao banco de dados: ${process.env.DB_NAME}`)
})

export default db
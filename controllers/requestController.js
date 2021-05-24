const Client = require('pg').Client
const database_credentials = {
    connectionString: process.env.DB_TOKEN,
    ssl: {
        rejectUnauthorized: false
    }
}
async function getData() {
    const cliente = new Client(database_credentials)
    await cliente.connect() 
    const resultados = await cliente.query("select * from Coordinates")
    cliente.end()
    return resultados.rows;
} 

module.exports = getData;


/*
  const create_table = await cliente.query(`set transaction read write;
    CREATE TABLE Coordinates( id serial PRIMARY KEY, type  VARCHAR ( 20 ) NOT NULL, properties json NOT NULL, geometry json NOT NULL );`)

*/
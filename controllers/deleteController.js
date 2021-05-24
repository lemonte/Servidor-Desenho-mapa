const Client = require('pg').Client
const database_credentials = {
    connectionString: process.env.DB_TOKEN,
    ssl: {
        rejectUnauthorized: false
    }
}
async function deleteData(id) {
    const cliente = new Client(database_credentials)
    try{
        await cliente.connect()
        await cliente.query('delete from Coordinates where id=' + id + '')
        return("Deletado com Sucesso") 
    }
    catch (ex){
        cliente.end()
        return("Um erro ocorreu: "+ex)
    }
    finally{
        cliente.end()
        return false
    }
}

module.exports = deleteData;
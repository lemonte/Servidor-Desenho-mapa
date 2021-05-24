const Client = require('pg').Client
const database_credentials = {
    connectionString: process.env.DB_TOKEN,
    ssl: {
        rejectUnauthorized: false
    }
}
async function updateData(id, type, properties, geometry) {
    const cliente = new Client(database_credentials)
    try {
        await cliente.connect()
        await cliente.query("UPDATE Coordinates SET (type, properties, geometry) = ('" + type + "', '" + JSON.stringify(properties)+"', '"+ JSON.stringify(geometry) + "') WHERE id = " + id + "")
        return("Atualizado com Sucesso") 
    }
    catch (ex) {
        cliente.end()
        return false
    }
    finally {
        cliente.end()
    }
}

module.exports = updateData;
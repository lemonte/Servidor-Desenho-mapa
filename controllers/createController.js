const Client = require('pg').Client
const database_credentials = {
    connectionString: process.env.DB_TOKEN ,
    ssl: {
        rejectUnauthorized: false
    }
}
async function createData(type, propeties, geometry) {
    const cliente = new Client(database_credentials)
    try {
        await cliente.connect()
        await cliente.query('insert into Coordinates("type", "properties", "geometry") values (' + "'" + type + "', '" + JSON.stringify(propeties) + "', '" + JSON.stringify(geometry) + "'" + ')')
        return ("inserido com Sucesso")
    }
    catch (ex) {
        cliente.end()
        return ("Um erro ocorreu: " + ex)
    }
    finally {
        cliente.end()
        return false
    }
}

module.exports = createData;
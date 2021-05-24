const { Pool } = require('pg')
const database_credentials = {
    connectionString: "postgres://uhbfswfnycrkda:d549399669f6abbec034769e02cb19e46fee2ae8c0784543d2503ff9c981cb68@ec2-18-215-111-67.compute-1.amazonaws.com:5432/dckqv5fto5iv3n",
    ssl: {
        rejectUnauthorized: false
    }
}
const pool = new Pool(database_credentials)
module.exports = pool;
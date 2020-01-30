// require('dotenv').config()
// const { Pool } = require('pg')
// const {PGUSER, PGHOST, PGPORT, PGPASSWORD, PGDATABASE} = process.env;
// const isProduction = process.env.NODE_ENV === 'production'

// // const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`
// const connectionString = `psql --host=${PGHOST} --port=${PGPORT} --username=${PGUSER} --${PGPASSWORD} --dbname=${PGDATABASE} `

// // const pool = new Pool({
// //   connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
// //   ssl: isProduction,
// // })
// console.log(PGHOST);

// const pool = new pg.Pool({
//   user: PGUSER,
//   host: PGHOST,
//   database: PGDATABASE,
//   password: PGPASSWORD,
//   port: PGPORT,
// })


// module.exports = { pool }

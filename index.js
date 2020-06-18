const { Pool } = require('node-postgres')

const pool = new Pool({
  host: 'postgres',
  user: 'test',
  database: 'db',
  password: 'mysupersecretpassword',
  port: 5432
})

const testProcess = async () => {
  try {
    const { rows: workingResult } = await pool.query('SELECT 1')

    // this should work
    console.log('test query', workingResult)

    const { rows: failingResult } = await pool.query('SELECT * FROM notatable')

    // this should never appear under any circumstance
    console.log('failing query', failingResult)
  } catch(error) {
    // this ^ should be the SQL error ("no relation notatable", etc) from the second query
    // but that SQL error is never registered as 'caught'
    // and this error never appears in the console
    console.error(error)
  }
}

testProcess()

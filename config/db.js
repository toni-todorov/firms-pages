import { Pool } from 'pg'

const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
    ssl: { rejectUnauthorized: false }
})

module.exports = {
    pool,
    async getClient() {
        const client = await pool.connect()
        return client
    }
}
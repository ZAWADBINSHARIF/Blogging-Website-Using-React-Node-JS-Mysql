// external import
import mysql from 'mysql2'

export const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    port: 3307,
    database: 'blogging_website'
})

export default async function dbConnection({ app, PORT }) {

    try {
        await db.connect()
        console.log('Database connected successfully')
        app.listen(PORT, () => console.log(`Server listening on port: http://localhost:${PORT}`))
    } catch (error) {
        console.error(error)
    }
}
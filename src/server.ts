import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

const PORT = 3001

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`listening on port ${PORT}`)
  })

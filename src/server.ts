import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/transaction', async () => {
  const transaction = await knex('transactions')
    .where('amount', 1000)
    .select('*')

  return transaction
})

const PORT = 3001

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`listening on port ${PORT}`)
  })

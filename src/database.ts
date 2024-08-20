import { knex as setupKnex } from 'knex'

export const knex = setupKnex({
  client: 'sqlite',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'user_db',
    password: 'password_db',
    database: 'ignite-node',
  },
})

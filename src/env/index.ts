import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3001),
})

export const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('invalid environment variable', _env.error.format())

  throw new Error('invalid environment variable')
}

export const env = _env.data

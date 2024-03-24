import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://us1-safe-giraffe-38775.upstash.io',
  token: process.env.REDIS_TOKEN!,
}) 
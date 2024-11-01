import devServer from '@hono/vite-dev-server'
import cloudflareAdapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

export default defineConfig(async () => {
  return {
    plugins: [
      devServer({
        adapter: cloudflareAdapter,
        entry: './src/index.ts',
      }),
    ],
  }
})
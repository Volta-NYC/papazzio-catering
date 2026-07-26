import { copyFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

const routes = [
  'about',
  'weddings',
  'venues',
  'packages',
  'menu',
  'restaurant',
  'gallery',
  'contact',
]

const distPath = join(process.cwd(), 'dist')
const indexPath = join(distPath, 'index.html')

await Promise.all(
  routes.map(async (route) => {
    const routePath = join(distPath, route)
    await mkdir(routePath, { recursive: true })
    await copyFile(indexPath, join(routePath, 'index.html'))
  }),
)

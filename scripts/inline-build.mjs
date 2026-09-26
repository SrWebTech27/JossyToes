import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const outputDirectory = resolve('dist')
const htmlPath = resolve(outputDirectory, 'index.html')
let html = await readFile(htmlPath, 'utf8')

const stylesheetMatch = html.match(/<link rel="stylesheet" crossorigin href="([^"]+)">/)
const scriptMatch = html.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/)

if (!stylesheetMatch || !scriptMatch) {
  throw new Error('No se pudieron encontrar los archivos compilados para incluirlos en el HTML.')
}

const stylesheetPath = resolve(outputDirectory, stylesheetMatch[1])
const scriptPath = resolve(outputDirectory, scriptMatch[1])
const stylesheet = await readFile(stylesheetPath, 'utf8')
const script = await readFile(scriptPath, 'utf8')
const portableScript = script.replace(
  /new URL\(`([^/`]+\.(?:jpeg|jpg|png|webp|svg))`,import\.meta\.url\)/g,
  'new URL(`./assets/$1`,import.meta.url)',
)

html = html
  .replace(stylesheetMatch[0], () => `<style>${stylesheet}</style>`)
  .replace(scriptMatch[0], () => `<script type="module">${portableScript}</script>`)

await writeFile(htmlPath, html)
console.log('HTML portátil creado: dist/index.html')

import { readFile, writeFile } from 'node:fs/promises'

const source = new URL('../public/Logo ANILP solo fiamma no sfondo.png', import.meta.url)
const target = new URL('../public/favicon-flame.svg', import.meta.url)
const png = await readFile(source)
const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
if (!png.subarray(0, 8).equals(signature) || png.readUInt32BE(16) !== 87 || png.readUInt32BE(20) !== 273) {
  throw new Error('The official flame asset has changed; review its viewport before regenerating the favicon.')
}

// A square SVG viewport shows the original flame without the staff below it.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 88 88">
  <title>Fiamma del logo ufficiale ANILP</title>
  <image width="87" height="273" href="data:image/png;base64,${png.toString('base64')}" />
</svg>
`
await writeFile(target, svg)
console.log('Generated public/favicon-flame.svg from the official PNG, without changing the source asset.')

import sharp from 'sharp'

const W = 1200
const H = 630

const gridLines = Array.from(
  { length: 11 },
  (_, i) => `<line x1="${(i + 1) * 100}" y1="0" x2="${(i + 1) * 100}" y2="${H}" />`
).join('')

const background = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#0a0a0b" />
  <g stroke="#1b1b1f" stroke-width="1">${gridLines}</g>
  <text x="196" y="126" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="bold" fill="#f2f3f5">Sina Kheiri</text>
  <text x="72" y="300" font-family="Arial, Helvetica, sans-serif" font-size="84" font-weight="bold" fill="#f2f3f5" letter-spacing="-3">Software Engineer</text>
  <rect x="72" y="342" width="64" height="4" rx="2" fill="#4c8dff" />
  <text x="72" y="418" font-family="Consolas, monospace" font-size="26" fill="#9ba1a9">Next.js - TypeScript - Node.js - ASP.NET</text>
  <text x="72" y="462" font-family="Consolas, monospace" font-size="26" fill="#6e747c">Front-end / Full-stack - 5+ years</text>
  <line x1="72" y1="524" x2="${W - 72}" y2="524" stroke="#232327" />
  <text x="72" y="560" font-family="Consolas, monospace" font-size="22" fill="#6e747c">sinakheiri.dev</text>
</svg>`

const mark = await sharp('public/image/svg/logo.svg', { density: 320 })
  .resize(88, 88)
  .png()
  .toBuffer()

await sharp(Buffer.from(background))
  .composite([{ input: mark, top: 64, left: 72 }])
  .png({ compressionLevel: 9 })
  .toFile('public/image/png/preview.png')

const meta = await sharp('public/image/png/preview.png').metadata()
console.log('preview.png', meta.width, 'x', meta.height, meta.format, meta.size, 'bytes')

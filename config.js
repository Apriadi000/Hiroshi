import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['62877036423990', 'KATE AR RAWAWIE']
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = '＼⋆⃟K⋆⃟A𓆩ᵇᵒᵗ𓆪⋆⃟T ⋆⃟E／'
global.author = 'KATE AR RAWAWIE'
global.image = 'https://telegra.ph/file/2eb7da4b4df70aa35350d.jpg'
global.watermark = '© ＼⋆⃟K⋆⃟A𓆩ᵇᵒᵗ𓆪⋆⃟T ⋆⃟E／'
global.wait = '「 ⏱️ 」Harap tunggu...'
global.gambar = 'https://telegra.ph/file/a2644cbdc76476f66bd17.jpg'

global.multiplier = 40 // The higher, The harder levelup

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   ini_txt = args.join(' ')
   //apikey = 'genbotkey'
  if (!args[0]) throw 'TEKS NYA MANA SAT?'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://leyscoders-api.herokuapp.com/api/textmaker/neon?q=${ini_txt}&apikey=MIMINGANZ`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'warface.jpg', `Nih kak`, m, true)
}
handler.help = ['neon'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(neon)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler



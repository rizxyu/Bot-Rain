
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://adiofficial-api.herokuapp.com/api/textmaker?text=${response[0]}&text2=${response[1]}&theme=glitch&apikey=gratiscuk`
  conn.sendFile(m.chat, res, 'glitch.jpg', `Nih kak`, m, false)
}
handler.help = ['glitch'].map(v => v + ' <text|text>')
handler.tags = ['sticker']
handler.command = /^(glitch)$/i

module.exports = handler


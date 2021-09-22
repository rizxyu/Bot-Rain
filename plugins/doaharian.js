let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {

let res = await fetch(`https://api-zeeoneofc.herokuapp.com/api/muslim/doaharian?apikey=Alphabot`)
json = await res.json()

if (!json.result) throw 'eror keknya!'
m.reply(`*Doa:* ${json.result.data.title}\n\n*Bacaan:* ${json.result.data.arabic}\n\n*Indonesia:* ${json.result.data.latin}`)

handler.help = ['doaharian']
handler.tags = ['quran']
handler.command = /^(doaharian|doaharian)$/i

module.exports = handler

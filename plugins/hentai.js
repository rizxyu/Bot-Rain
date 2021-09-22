let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
let res = `http://hadi-api.herokuapp.com/api/hentai`
conn.sendFile(m.chat, res, 'test.jpg', `Done`, m, false)
}
handler.help = ['hentai']
handler.tags = ['dewasa']
handler.command = /^(hentai)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 5

module.exports = handler

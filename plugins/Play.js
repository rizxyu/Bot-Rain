const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let { buttonsMessage, image, MimeType } = MessageType

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} california`
  let chat = global.DATABASE.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Konten Tidak ditemukan'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
 /*
 *Wm BOT
 * let name = global.nama
 */
  let botol = global.botwm
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw 'semua server gagal'
  if (yt2 === false) throw 'semua server gagal'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send2ButtonImg(m.chat,`
*🔖Judul:* ${title}
*📂Ukuran File Audio:* ${filesizeF}
*📂Ukuran File Video:* ${yt2.filesizeF}
*💽Server y2mate:* ${usedServer}

_jika eror laporkan owner_
`.trim(), thumb,  `${botol}\nMade with Rizxyu\nDonate me for support`, `🎵Audio ${filesizeF}`, `.yta ${vid.url}`, `🎥Video ${yt2.filesizeF}`, `.yt ${vid.url}`, {
    quoted: m,
    contextInfo: {
        externalAdReply: {
            title: `${title}`,
            body: `Apakah ini Benar dengan Lagu yg dicari?`,
            description: `Apakah ini benar dengan lagu yg dicari?`,
            mediaType: 2,
          thumbnail: thumb,
         mediaUrl: vid.url
        }
     }
    })
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(p|play)$/i

handler.exp = 0

module.exports = handler


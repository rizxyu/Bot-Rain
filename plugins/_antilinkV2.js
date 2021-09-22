//BY RIZXYU DAN RESTU
//GAK USAH HAPUS CREDIT LER

let handler = m => m

let linkRegex = /chat.whatsapp.com/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)
  let aizin = m.text.includes("#izin") || m.text.includes("#Izin")

  if (chat.antiLink && link && !aizin) {
 m.reply(`*「 ANTI LINK V2 」*\n\nTerdeteksi *${name}* telah mengirim link group!\n\nMaaf Kamu akan dikick dari grup ini!`)
   this.groupRemove(m.chat, [m.sender])
  } else if ( chat.antiLink && link && aizin) {
  	this.sendButton( m.chat, `KAMU TIDAK AKAN DIKICK KARENA KAMU MEMAKAI TANDA #izin`, `AntilinkV2`, `Oke`, `ok`, m)
  	}
}
handler.group = true

module.exports = handler

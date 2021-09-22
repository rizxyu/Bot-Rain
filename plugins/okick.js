let handler = async (m, { conn, args }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])
  conn.fakeReply(m.chat, `Berhasil kick Member`, '0@s.whatsapp.net', '*🦊Kasian amat bre*')
}
handler.help = ['kick','-'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']
handler.command = /^(okick|o\-)$/i
handler.owner,handler.mods,handler.admin = true
handler.premium = false
handler.group = true
handler.private = false

handler.botAdmin = true

handler.fail = null

module.exports = handler

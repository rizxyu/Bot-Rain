let handler = async (m, { conn, participants }) => {
  let members = participants.filter(member => !member.isAdmin).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
  for (let user of users) await conn.groupMakeAdmin(m.chat, [user]).catch(console.log)
  conn.fakeReply(m.chat, `Berhasil jadi admin`, '0@s.whatsapp.net', '*🦊JADI ADMIN BOS*')
}
handler.help = ['promote','admin','^'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']

handler.command = /^(opromote|oadmin|o\^)$/i

handler.owner,handler.mods,handler.admin = true
handler.group = true

handler.botAdmin = true

module.exports = handler

let handler = async (m, { conn, participants }) => {
  let members = participants.filter(member => member.isAdmin).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
  for (let user of users) await conn.groupDemoteAdmin(m.chat, [user]).catch(console.log)
  conn.fakeReply(m.chat, `Berhasil jadi member`, '0@s.whatsapp.net', '*🦊JADI MEMBER LAGI YAHAHA*')
}
handler.help = ['demote','member'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']

handler.command = /^(omember|odemote|o\^)$/i

handler.owner,handler.mods,handler.admin = true
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler

//TEAM
//FAUZAN
//RIZKY
//DENTA
//Restu?

let handler = async(m, {conn, command, usedPrefix, text}) => {

let fail = 'format salah, example: ' +usedPrefix+command+ ' KingZan|DynastiKingdom|@user'

let kingdom = global.DATABASE.data.users[m.sender]

let split = text.split`|`

let namk = split[0]

let kingdomName = split[1]

let aliance = split[2]

if (kingdom.created == true) return m.reply('kingdom telah dibuat')

if (!namk || !kingdomName || !aliance) return m.reply(fail)



global.DATABASE.data.users[m.sender] = {

created: true,

namk,

kingdomName,

troops: 46,

population: 100,

lvl: 1,

aliance,

koin: 100000,
}

conn.reply(m.chat, `

🏰YOUR KINGDOM CREATED!!

🏰Name Kerajaan: ${kingdomName}
👑Name King: ${namk}
👥populasi: ${global.DATABASE.data.users[m.sender].population}
👮army: ${global.DATABASE.data.users[m.sender].troops}
🎋Level: ${global.DATABASE.data.users[m.sender].lvl}
💰Koin: ${global.DATABASE.data.users[m.sender].koin} *[ BERGUNA UNTUK UP LEVEL KERAJAAN ]*

🏳️User Yg diajak aliansi
${aliance}

Cek Kerajaaan mu!
${usedPrefix}Mykingdom
`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['kerajaan nama|namakerajaan']
handler.tags = ['rpg']

module.exports = handler

handler.command = /^kingdom$/i










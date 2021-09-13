/*
* RAIN XYZ X STIKERIN
* REKODE BY RIZXYU
*/
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let chalk = require('chalk')
let fetch = require('node-fetch');
let levelling = require('../lib/levelling')
let path = require('path')

let handler = async (m, { conn, usedPrefix }) => {
	let name = conn.getName(m.sender)
    let me = conn.user.name
   let avtar = await conn.getProfilePicture(conn.user.jid)
   let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let gith = 'https://github.com/Rizxyu'
let fbe = 'https://www.facebook.com/profile.php?id=100064516381260'
///
let { exp, limit, level, role } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let prem = global.prems.includes(who.split`@`[0])
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
        let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
     let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    //
    
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Hello ${name}👋

_👤Your Info:_
Limit💳: ${limit}
💹Level: ${level}
🎋Role: ${role}
❇️Exp:  (${exp}/${max})

🏆untuk melihat rank kamu ${usedPrefix}rank

⚙️Bot Runtime: ${uptime}

My sosmed:
🔸Facebook: ${fbe}
🔸Github: ${gith}

Note: Your Data Not Saving in database bot
`,
                        "description": "*Bot By Rizxyu*",
                        "buttonText": "Click Here To List",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Download Menu`,
                                        "description": "\nI Want To Use Download Menu",
                                        "rowId": ".dmenu"
                                    },{
                                        "title": "Database Menu",
                                        "description": "\nI Want To Use Database Menu",
                                        "rowId": ".damenu"              
                                      },{
                                        "title": "Game Menu",
                                        "description": "\nI Want To Use Database Menu",
                                        "rowId": ".gmenu"                       
                                    },{
                                    	"title": "All Menu",
                                        "description": "\nI Want To Use All Menu",
                                        "rowId": ".allmenu"                 
                                    },{
                                        "title": "internet Menu",
                                        "description": "\nI Want To Use Jadibot Menu",
                                        "rowId": ".inmenu"                 
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\nI Want To Use Owner Menu",
                                        "rowId": ".omenu"     
                                    }, {
                                        "title": " Group Setting",
                                        "description": "\nI Want To User Group Setting",
                                        "rowId": ".groupmenu"
                                        },{
                                        "title": `Maker Menu`,
                                        "description": "\n I want to use Maker menu",
                                        "rowId": ".mmenu"      
                                        },{
                                        "title": ` Random Menu`,
                                        "description": "\n I want to use Random menu",
                                        "rowId": ".rmenu"      
                                        },{
                                        "title": `Owner Menu`,
                                        "description": "\n I want to use Owner menu",
                                        "rowId": ".ownermenu"      
                                        },{
                                        "title": `Info Menu`,
                                        "description": "\nI Want To Use Info Menu",
                                        "rowId": ".imenu"     
                                        },{
                                        "title": `funn Menu`,
                                        "description": "\nI Want To Use Info Menu",
                                        "rowId": ".fmenu"     
                                  },{
                                        "title": `Islam Menu`,
                                        "description": "\nI Want To Use Info Menu",
                                        "rowId": ".ismenu"      
                                        },{
                                        "title": `Audio Menu`,
                                        "description": "\nI Want To Use Info Menu",
                                        "rowId": ".amenu"     
                                    
                                    },{
                                        "title": `Creator/Partner`,
                                        "description": "\nI Want To Use creator Menu",
                                        "rowId": ".creator"                 
                                    },{
                                    	"title": `Support Me`,
                                        "description": "\nAku ingin donasi",
                                        "rowId": ".donasi"                 
                                    },{
                                        "title": `Source Bot`,
                                        "description": "\n I want to get this SC bot",
                                        "rowId": ".scbot"                 
                                    }
                                    
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
                 }
handler.command = /^(menu|help)$/i
handler.register = true
module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

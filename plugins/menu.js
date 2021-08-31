//Fix By rizkyu
let PhoneNumber = require('awesome-phonenumber')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let { buttonsMessage, contactsArray } = MessageType
let chalk = require('chalk')
let fetch = require('node-fetch');
let path = require('path')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
/////
let handler = async (m, { conn, usedPrefix: _p }) => {
	////
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let grupwae = 'https://chat.whatsapp.com/FrkAqZye5lAEhx0M7kF53R'
let ytub = 'https://youtube.com/channel/UC3UAP0ikH_3_ICRP_3Ar-Lw'
let prefixo = 'Multi Prefix'
let febo = 'https://www.facebook.com/profile.php?id=100064516381260'
let kntl = 'https://ꫂẉhatsapp.com/.❾❾.࿋ꫂẉhatsapp.com/ム̥₣Ʉ'
tombol = [
{buttonId: 'dona', buttonText: {displayText: 'DONASI'}, type: 1}
]
let prem = global.prems.includes(who.split`@`[0])
///

let Txh = `━━┅⑈𝒯𝒽𝒶𝓃𝓀𝓈 ℱℴ𝓇⑈┅━━\n⊙Nurutomo,\n⊙Arrifb,\n⊙Bochil Gaming,\n⊙Rendy Ganz,\n⊙Rizky,\n⊙ Fauzan\n⊙Farhan\n⊙Denta\n⊙Penyedia apikey\n┅━━⊙━━┅`
let urlyyt = ['https://youtu.be/shw7xIzGX5o','https://youtu.be/aKtb7Y3qOck','https://youtu.be/yJg-Y5byMMw','https://youtu.be/3nQNiWdeH2Q']
let urlyt = urlyyt[Math.floor(Math.random() * urlyyt.length)]
///
let tags = {
  'main': 'Main',
  'info': 'Info',
  'rpg': 'Rpg',
  'game': 'Game',
  'xp': 'Exp & Limit',
  'sticker': 'Maker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'admin': 'Admin',
  'group': 'Group',
  'premium': 'Premium',
  'internet': 'Internet',
  'anonymous': 'Anonymous Chat',
  'nulis': 'MagerNulis & Logo',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'fun': 'Fun',
  'database': 'Database',
  'vote': 'Voting',
  'absen': 'Absen',
  'quran': 'Islami',
  'jadibot': 'Jadi Bot',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  '': 'No Category',
}
///

let defaultMenu = {
  before: `
_*💈Your Info💈*_

🔖 *Name:* %name
🔖 *Number:* https://wa.me/${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
🔖 *Premium:* ${prem ? 'Yes' : 'No'}
🔖 *Limit:* %limit Limit
🔖 *Role:* %role
🔖 *Level:* %level (%exp / %maxexp) [%xp4levelup lagi untuk levelup]
🔖 %totalexp XP in Total

_*📍 Simpel Info*_

🔖 *Calender Jawa:* %week %weton, %date
🔖 *Calender Islam:* %dateIslamic
🔖 *Waktu:* %time WIB
🔖 *Waktu:* %wita WITA
🔖 *Waktu:* %wit WIT

_*💈Bot Stats💈*_

🔖 *Prefix:* [${prefixo}]
🔖 *Runtime:* %uptime (%muptime)
🔖 *Total user:* %totalreg User
🔖 *Total Premium:* %totalprem User
🔖 *Total chat:* %totalchat

%readmore`.trimStart(),
  header: `_*💈%category 💈*_`,
  body: `🔖 %cmd %islimit %isPremium`,
  footer: ``,
  after: `${Txh}`,
}
	await conn.fakeReply(m.chat, 'Sedang Memuat Menu', '0@s.whatsapp.net', '*Rain Bot By rizxyu*')
	let avtar = './lib/logo.png'
	let out = Buffer.alloc(0)
  try {
    avtar = await conn.getProfilePicture(conn.user.jid)
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    const jam = moment.tz('Asia/Jakarta').format('HH')
    let wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            let wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
          //////  let jam = moment.tz('Asia/Jakarta').format("HH")
             var ucapanWaktu = 'Selamat Pagi 🌄'



				if (jam >= '03' && jam <= '10') {

				ucapanWaktu = 'Selamat Pagi 🌄'

				} else if (jam >= '10' && jam <= '13') {

				ucapanWaktu = 'Selamat Siang ☀️'

				} else if (jam >= '13' && jam <= '18') {

				ucapanWaktu = 'Selamat Sore 🌅'

				} else if (jam >= '18' && jam <= '23') {

				ucapanWaktu = 'Selamat Malam 🌙'

				} else {

				ucapanWaktu = 'Selamat Malam 🌙'

				}
				//
				const freply = {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: {



					"productMessage": {

						"product": {

							"productImage": {

								"url": "https://mmg.whatsapp.net/d/f/AlNR_wCNI-WCnL4QWyE-I71kUKSCWBbq9f4XN2E9Hc-1.enc",

								"mimetype": "image/jpeg",

								"fileSha256": "KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",

								"fileLength": "43344",

								"height": 1080,

								"width": 1080,

								"mediaKey": "cX+6c20dws6B++0slmMNXcCk7omK+zvheoN6087j9nl=",

								"fileEncSha256": "BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",

								"directPath": "/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",

								"mediaKeyTimestamp": "1612168223",

								"jpegThumbnail": global.thumbnail ? global.thumbnail : Buffer.alloc(0)

		},

							"productId": "3872465552870232",

							"title": `NGAPAIN BANG?`,

							"description" : `SC BY RIZKY`,

	"productImageCount": 1

						},

						"businessOwnerJid": "6282328303332@s.whatsapp.net"}}}    
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
    let totalreg = Object.keys(global.DATABASE.data.users).length
let totalchat = Object.keys(global.DATABASE.data.chats).length
let totalprem = Object.keys(global.prems).length
    let rtotalreg = Object.values(global.DATABASE.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, totalchat, rtotalreg, role, wit, wita, totalprem, jam, ucapanWaktu,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
   /////conn.sendFile(m.chat, avtar, 'pp.gif', text.trim(), { key: { remoteJid: '0@s.whatsapp.net' }, message: { imageMessage: { caption: `_🎐Keep spirit_\nBot aktif ${uptime}`, Thumbnail: await (await fetch(avtar)).buffer() }}})
   conn.sendMessage(m.chat, text.trim(), 'extendedTextMessage', { detectLinks: false, thumbnail: avtar, quoted: freply, contextInfo : { mentionedJid: conn.parseMention(text),

    externalAdReply: {

                    title: `BOT WHATSAPP BY RIZKY`,

                    body: `${ucapanWaktu} ${name}`,

                    mediaType: 2,

                    thumbnailUrl: await conn.getProfilePicture(conn.user.jid),

                    mediaUrl: urlyt

                }

}})
   /////conn.sendFile(m.chat, avtar, 'pp.gif', text.trim(), MessageType.text, { quoted: m, contextInfo: {
        
   //c//onn.sendMessage(m.chat, text.trim(), m)
  // conn.sendMessage(m.chat, text.trim(), 'conversation', { sendEphemeral: true, quoted: freply, contextInfo : { mentionedJid: conn.parseMention(text) }})
 // conn.fakeReply(m.chat, text.trim(), '0@s.whatsapp.net', '*🦊JANGAN LUPA DONASI*')
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['allmenu', 'help']
handler.tags = ['main']
//handler.customPrefix = /allmenu/i
handler.command = /^allmenu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
console.log(chalk.redBright(">>UPDATE<< 'MENU ( BY RIZXYU )'"))
delete require.cache[file]
  require(file)
})

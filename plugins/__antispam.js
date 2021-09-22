let handler = m => m

handler.all = async function (m) {
    this.spam = this.spam ? this.spam : {}
    if (!(m.sender in this.spam)) {
        let spaming = {
        jid: await m.sender, 
        spam: 0,
        lastspam: 0
            
        }
        this.spam[spaming.jid] = spaming
    } else try {
        this.spam[m.sender].spam += 1
        global.DATABASE.data.users[m.sender].warn += 1
        let matot = global.DATABASE.data.users[m.sender].warn
        let name = this.getName(m.sender)
        let Peler = global.DATABASE._data.chats[m.chat]
        if (new Date - this.spam[m.sender].lastspam > 4000) {
            if (this.spam[m.sender].spam > 100) {
                this.spam[m.sender].spam = 0
                this.spam[m.sender].lastspam = new Date * 1
                 Peler.isBanned = true
                 m.reply(`*[ ANTI SPAM ]*\n\n*${name}* Kamu Telah Melakukan spam\n*⚠️BOT OTOMATIS KE MODE BANCHAT_`)
             } else {
                this.spam[m.sender].spam = 0
                this.spam[m.sender].lastspam = new Date * 1
            }
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = handler

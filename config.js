const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = true
global.antitags = true


global.Owner = ['62859106670631']
global.OwnerNumber = ['62859106670631']
global.ownertag = ['62859106670631']
global.BotName = "SkySurfersBOT"
global.packname = "SkySurfersBOT"
global.author = "By: GabrielHrz"
global.OwnerName = "GabrielHrz"
global.BotSourceCode = "https://skysurfers.xyz/"
global.SupportGroupLink = "https://chat.whatsapp.com/Frk359WrUtrAGNY7DY0Stf"
global.sessionName = "session"

// Prefix //
// If you want to change the prefix, change it and also change all switch's button id from Core.js  otherwise buttons will not work //
global.prefa = ['-'] 


global.location = "Jakarta, Indonesia"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://gabrielhrz.my.id/crot/pain.mp4' }
global.websitex = "https://skysurfers.xyz/"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Job done...',
    useradmin: 'Maaf, Hanya *Admins Group* Yang Dapat Menggunakan Perintah Ini *Baka*!',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
    botowner: 'Hanya my *Owner* Yang Bisa Menggunakan Perintah Ini, Baka!',
    grouponly: 'Perintah Ini Hanya Digunakan Di *Groups*, Baka!',
    privateonly: 'Perintah Ini Hanya Di Gunakan Di *Private Chat*, Baka!',
    botonly: 'Hanya the *Bot itself* Yang Bisa Gunakan Perintah Ini!',
    waiting: 'Chotto Matte...',
    nolink: 'Please provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'Kamu Telah Di *Banned* Melalui Perintah!',
    bangc: 'Grouo Ini telah Di *Banned* Melalui Perintah!',
    nonsfw: 'Dont be a pervert Baka! This is not a NSFW enabled group!'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

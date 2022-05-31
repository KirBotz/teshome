const fs = require('fs');
__path = process.cwd()
const NiatSholat = (yah) => {
   return new Promise( async (resolve, reject) => {
       const scraper = JSON.parse(fs.readFileSync(__path +`/data/niatSholat/${yah}.json`))
       console.log(scraper)
       const result = {
         name: scraper.name,
         arabic: scraper.arabic,
         latin: scraper.latin,
         terjemahan: scraper.terjemahan
       }
       resolve(result)
   }).catch((err) => {resolve(err) })
}

module.exports = NiatSholat
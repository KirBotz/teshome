__path = process.cwd()
var express = require('express')
var fetch = require('node-fetch')
var cheerio = require('cheerio')
var request = require('request')
var axios = require('axios')
var router  = express.Router()
var creator = 'Creator Bot Akira'

var { fetchJson, getBuffer } = require(__path + '/lib/fetcher.js')
var { TiktokDownloader } = require('../lib/tiktokdl.js')
var {
	Searchnabi,
	NiatSholat,
	Gempa,
	AsmaulHusna
} = require('./../lib');

var {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("./../lib/utils/yt");

var {
  ttdownloader, 
  youtube, 
  twitter, 
  fbdown, 
  igstalk, 
  igstory, 
  igdl, 
  pinterest, 
  linkwa, 
  playstore, 
  wattpad, 
  chara, 
  lirik, 
  sholat
} = require("./../lib/anjay");

loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan Apikey Nya',
        getApikey: 'Jika Tidak Punya Apikey Buy wa.me/6287705048235'
    },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Apikey Yang Anda Masukan Salah, Jika Tidak Punya Apikey Buy wa.me/6287705048235'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'Fitur Sedang Error Silahkan Lapor Ke WhatsApp wa.me/6287705048235'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Silahkan Masukan Url Terlebih Dahulu'
    },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan Judul Yang Mau Di Cari'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan Nama Yang Mau Di Cari'
    }
}

const listkey = ["KirBotz", "Akira"]

var len = 15
var arr = '123456789abcdefghijklmnopqrstuvwxyz'
var random = '';
for (var i = len; i > 0; i--) {
random += arr[Math.floor(Math.random() * arr.length)];
}
var lenn = 5
var randomlagi = '';
for (var i = lenn; i > 0; i--) {
randomlagi += arr[Math.floor(Math.random() * arr.length)];
}
var randomTextNumber = random+randomlagi+'Akira'+'KirBotz';

router.get('/asmaulhusna', async (req, res, next) => {
		Apikey = req.query.apikey;
		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		AsmaulHusna()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.invalidKey)
}
})

router.get('/doaharian', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'KirBotz') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Doaharian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/bacaansholat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'KirBotz') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Bacaansholat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/gempa', async (req, res, next) => {
	        var Apikey = req.query.apikey
		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.invalidKey)
}
})

router.get('/translate', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kata = req.query.kata
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'KirBotz') return res.json(loghandler.invalidKey)
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "Masukkan Kata Kata Nya"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		Apikey = req.query.apikey;
		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.invalidKey)
}
})

router.get('/niatsholat', async (req, res, next) => {
	var yah = req.query.yah,
		Apikey = req.query.apikey;
		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		NiatSholat(yah)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/cogan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Cogan.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/cecan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Cecan.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/technology', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Technology.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/gamer', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Gamer.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/progamming', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Progamming.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/mountain', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Mountain.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/islamic', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Islamic.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/anime', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Anime.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/loli', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Loli.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/neko', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Neko.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/ahegao', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Ahegao.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/akira', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Akira.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/akiyama', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Akiyama.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/aesthetic', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Aesthetic.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/darkjokes', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Darkjokes.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/hijaber', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)	
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Hijaber.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/asupan/asupan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Asupan.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/asupan/bocil', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Bocil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/random/asupan/rikagusriani', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (apikeyInput != 'KirBotz')  return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://raw.githubusercontent.com/KirBotz/tesdoan/master/KIR2/Rika.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'Akira',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/download/ytmp3', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp3(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
})

router.get('/download/ytmp4', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp4(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
})

router.get('/download/playmp3', async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytPlayMp3(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.json(loghandler.invalidKey)
      }
})

router.get('/download/playmp4', async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytPlayMp4(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.json(loghandler.invalidKey)
      }
})

router.get('/download/ytsearch', async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytSearch(query)
        .then((result) => {
            res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result
            })
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
     res.json(loghandler.invalidKey)
     }
})

router.get('/download/tiktok', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     TiktokDownloader(`${url}`)
        .then(data => {
        var result = data.result;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
               result
             })
         })
         .catch((error) => {
            res.json(error);
        });
      } else {
     res.json(loghandler.invalidKey)
     }
})

module.exports = router
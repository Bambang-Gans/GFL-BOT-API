__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')
}

var creatorList = ['@L-Mzero','@L-M0','@LMO','@LINGMO', '@LINGZ','@LYNX','@LINGganz'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];


var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var YoutubeAPI = require('simple-youtube-api')
var youtubs = new YoutubeAPI('AIzaSyB2DRtHACCeIzgduQzzITkS4rnpz_sA2BA'); 
var router  = express.Router();

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var {
	Nulis,
	Vokal,
	Base,
	Searchnabi,
        Gempa,
        IG,
	ytplay,
	ytdldown
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey',
        getApikey: 'gak punya apikey? chat gw aja yaaa di wa.me/6283898698875 , key nya gratis kok gan, jadi santuyy ajaa'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6283898698875 , key nya gratis kok gan, jadi santuyy ajaa'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    }
}

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

        var randomTextNumber = random+randomlagi+'---------ZahirGanteng'+'ZHIRRR--GANS';
        
 
 async function cekApiKey(api) {
 	ap = await zahirr.findOne({apikey:api})
 return ap;
 }
router.get('/find', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != 'zahirgans') return res.json(loghandler.invalidKey)

    try {
        zahirr.find()
            .then(result => {
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result
                })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/cekapikey', async (req, res, next) => {
	var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	a = await cekApiKey(apikeyInput)
	if (a) {
	json = JSON.stringify({
		status: true,
		creator: creator,
		result: {
            status:a.status,
			id: a._id,
			apikey: a.apikey,
			more_info: {
				email: a.email,
				nomor_hp: a.nomor_hp,
				name: a.name,
				age: a.age,
				country: a.country,
				exp:a.exp,
			},
		},
		message: `jangan lupa follow ${creator}`
	})
} else {
	json = JSON.stringify({
		status: false
	})
}
res.send(JSON.parse(json))
})

router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'zahirgans') return res.json(loghandler.invalidKey)

    try {
        zahirr.insert({
        	status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/remove', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'zahirgans') return res.json(loghandler.invalidKey)

    try {
        zahirr.remove({
            status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
             res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menghapus data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/tiktod', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.invalidlink)
         })
})

router.get('/tiktod/stalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
})

router.get('/randomquote', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/quotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infonpm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/short/tiny', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `jangan lupa follow ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		apikeyInput = req.query.apikey;
		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
})

router.get('/nulis', async (req, res, next) => {
	var text = req.query.text,
		 apikeyInput = req.query.apikey;
	if(!apikeyInput) return res.json(loghandler.notparam)
     if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
	 if(!text) return res.json(loghandler.nottext)
		Nulis(text)
		 .then(hasil => {
			fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
            })
           .catch(err => {
		  res.json(loghandler.error)
		   })
})

router.get('/textmaker', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'glitch' && theme != 'google-suggestion') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'glitch') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=93f5c8966cfaf3ca19051ee9f85c14f3&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'google-suggestion') {
        	if (!text2) return res.json(loghandler.nottext2)
        if (!text3) return res.json(loghandler.nottext3)
            request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/game', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'pubg' && theme != 'battlefield') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'pubg') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'battlefield') {
        	if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/senja', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'coffee-cup' && theme != 'coffee-cup2') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'coffee-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'coffee-cup2') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		apikeyInput = req.query.apikey;

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
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
})



router.get('/textmaker/yamaker', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'metal-epek' && theme != 'scary-njir') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'metal-epek') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'scary-njir') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})


router.get('/textmaker/lmo', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'grapiti' && theme != 'bintang') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'grapiti') {
            try {
            request.post({
                url: "https://photooxy.com/banner-cover/graffiti-text-cover-222.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'bintang') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})


router.get('/infogempa', async (req, res, next) => {
	        var apikeyInput = req.query.apikey

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
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
})

router.get('/hadits', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
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


router.get('/quran', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
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


router.get('/fbdown', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
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


router.get('/textmaker/metallic', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'neon' && theme != 'glow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'neon') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'glow') {
            request.post({
                url: "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})


router.get('/textmaker/noti', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'metal-wolf' && theme != 'daun-kaki') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'metal-wolf') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'daun-kaki') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})


router.get('/textmaker/neon9', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != '3dwhite' && theme != 'heri-poter') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == '3dwhite') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-text-effect-under-white-cube-217.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'heri-poter') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})


router.get('/textmaker/neon7', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'party' && theme != 'hemker') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'party') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-party-neon-text-effect-161.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'hemker') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/text-under-web-matrix-effect-185.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})


router.get('/anime/loli', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
       fetch(encodeURI(`https://rawcdn.githack.com/L-M0z/Api-raw-v/d3f7c5223fb402f1b7f7d9a53de4346cb591992d/loli.json`))
        .then(response => response.json())
        .then(data => {
        ni = JSON.parse(JSON.stringify(data));
        nim =  n[Math.floor(Math.random() * ni.length)];
        var result = nim;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/genshin', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://rawcdn.githack.com/L-M0z/Api-raw-v/0bfb230d51759cd3df1db9a107c8493eb4d1cf9c/Genshinimpact/${search}.json`))
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


router.get('/textmaker/alam', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'summer' && theme != 'flower') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'summer') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'flower') {
            request.post({
                url: "https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
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


router.get('/muslim/wirid', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
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


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
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


router.get('/muslim/doaharian', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
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


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
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


router.get('/muslim/niatshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
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


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
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


router.get('/nsfw/ahegao', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/ahegao.json`))
        .then(response => response.json())
        .then(data => {
        nee = JSON.parse(JSON.stringify(data));
	    nimo =  nee[Math.floor(Math.random() * nee.length)];
        var result = nimo;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/ass', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/ass.json`))
        .then(response => response.json())
        .then(data => {
        sas = JSON.parse(JSON.stringify(data));
	    dedj =  sas[Math.floor(Math.random() * sas.length)];
        var result = dedj;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/bdsm', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/bdsm.json`))
        .then(response => response.json())
        .then(data => {
        fgd = JSON.parse(JSON.stringify(data));
	    myt =  fgd[Math.floor(Math.random() * fgd.length)];
        var result = myt;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/blowjob', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/blowjob.json`))
        .then(response => response.json())
        .then(data => {
        hehy = JSON.parse(JSON.stringify(data));
	    hyt =  hehy[Math.floor(Math.random() * hehy.length)];
        var result = hyt;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/boobjob', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/boobjob.json`))
        .then(response => response.json())
        .then(data => {
        tet = JSON.parse(JSON.stringify(data));
	    tot =  tet[Math.floor(Math.random() * tet.length)];
        var result = tot;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/creampie', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/creampie.json`))
        .then(response => response.json())
        .then(data => {
        tat = JSON.parse(JSON.stringify(data));
	    titid =  tat[Math.floor(Math.random() * tat.length)];
        var result = titid;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/cuckold', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/cuckold.json`))
        .then(response => response.json())
        .then(data => {
        cuckold = JSON.parse(JSON.stringify(data));
	    eek =  cuckold[Math.floor(Math.random() * cuckold.length)];
        var result = eek;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/cum', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/cum.json`))
        .then(response => response.json())
        .then(data => {
        cum = JSON.parse(JSON.stringify(data));
	    cium =  cum[Math.floor(Math.random() * cum.length)];
        var result = cium;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/elves', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/elves.json`))
        .then(response => response.json())
        .then(data => {
        elis = JSON.parse(JSON.stringify(data));
	    gty =  elis[Math.floor(Math.random() * elis.length)];
        var result = gty;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/ero', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/ero.json`))
        .then(response => response.json())
        .then(data => {
        eros = JSON.parse(JSON.stringify(data));
	    sens =  sens[Math.floor(Math.random() * eros.length)];
        var result = sens;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/femdom', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/femdom.json`))
        .then(response => response.json())
        .then(data => {
        femi = JSON.parse(JSON.stringify(data));
	    dommys =  femi[Math.floor(Math.random() * femi.length)];
        var result = dommys;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/gangbang', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/gangbang.json`))
        .then(response => response.json())
        .then(data => {
        gangg = JSON.parse(JSON.stringify(data));
	    bangbang =  bangbang[Math.floor(Math.random() * gangg.length)];
        var result = bangbang;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/gangbang', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/gangbang.json`))
        .then(response => response.json())
        .then(data => {
        gangg = JSON.parse(JSON.stringify(data));
	    bangbang =  bangbang[Math.floor(Math.random() * gangg.length)];
        var result = bangbang;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/glasses', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/glasses.json`))
        .then(response => response.json())
        .then(data => {
        kamcas = JSON.parse(JSON.stringify(data));
	    kacas =  kamcas[Math.floor(Math.random() * kamcas.length)];
        var result = kacas;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/hentai', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/hentai.json`))
        .then(response => response.json())
        .then(data => {
        henn = JSON.parse(JSON.stringify(data));
	    taik =  henn[Math.floor(Math.random() * henn.length)];
        var result = taik;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/hentai-gif', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/hnt_gifs.json`))
        .then(response => response.json())
        .then(data => {
        samg = JSON.parse(JSON.stringify(data));
	    ngengek =  samg[Math.floor(Math.random() * samg.length)];
        var result = ngengek;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/nsfw/incest', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/incest.json`))
        .then(response => response.json())
        .then(data => {
        incest = JSON.parse(JSON.stringify(data));
	    ences =  incest[Math.floor(Math.random() * incest.length)];
        var result = ences;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



router.get('/nsfw/masturbation', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/masturbation.json`))
        .then(response => response.json())
        .then(data => {
        cooll = JSON.parse(JSON.stringify(data));
	    liii =  cooll[Math.floor(Math.random() * cooll.length)];
        var result = liii;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/wp-nsfw', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/nsfwMobileWallpaper.json`))
        .then(response => response.json())
        .then(data => {
        mobi = JSON.parse(JSON.stringify(data));
	    lee =  mobi[Math.floor(Math.random() * mobi.length)];
        var result = lee;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/nsfwneko', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/nsfwNeko.json`))
        .then(response => response.json())
        .then(data => {
        nemko = JSON.parse(JSON.stringify(data));
	    nisme =  nemko[Math.floor(Math.random() * nemko.length)];
        var result = nisme;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/panties', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/panties.json`))
        .then(response => response.json())
        .then(data => {
        gaktaunjir = JSON.parse(JSON.stringify(data));
	    pantiensapan =  gaktaunjir[Math.floor(Math.random() * gaktaunjir.length)];
        var result = pantiensapan;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/pussy', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/pussy.json`))
        .then(response => response.json())
        .then(data => {
        memek = JSON.parse(JSON.stringify(data));
	    pussyahh =  memek[Math.floor(Math.random() * memek.length)];
        var result = pussyahh;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/tentakel', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/tentacles.json`))
        .then(response => response.json())
        .then(data => {
        wirdword = JSON.parse(JSON.stringify(data));
	    temtakel =  wirdword[Math.floor(Math.random() * wirdword.length)];
        var result = temtakel;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/uniform', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/uniform.json`))
        .then(response => response.json())
        .then(data => {
        seragam = JSON.parse(JSON.stringify(data));
	    seklh =  seragam[Math.floor(Math.random() * seragam.length)];
        var result = seklh;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/thighs', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/thighs.json`))
        .then(response => response.json())
        .then(data => {
        thighs = JSON.parse(JSON.stringify(data));
	    hmmmm =  thighs[Math.floor(Math.random() * thighs.length)];
        var result = hmmmm;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfw/yuri', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://rawcdn.githack.com/Not-found-squad/hentong-raw/12855ba1dc86f55496ced2de80cb84ff1911a626/yuri.json`))
        .then(response => response.json())
        .then(data => {
        yuris = JSON.parse(JSON.stringify(data));
	    lesb =  yuris[Math.floor(Math.random() * yuris.length)];
        var result = lesb;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json`))
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


router.get('/muslim/niatshubuh', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
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


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
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


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
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


router.get('/muslim/niatisya', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
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


router.get('/muslim/niatashar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
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


router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/CyberSpace.json`))
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


router.get('/wallpaper/teknologi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Technology.json`))
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


router.get('/wallpaper/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Islamic.json`))
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


router.get('/wallpaper/programming', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Programming.json`))
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


router.get('/wallpaper/pegunungan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Mountain.json`))
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


router.get('/wikipedia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
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

router.get('/randomquote/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
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


router.get('/drakorasia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
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


router.get('/jadwalshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kota = req.query.kota
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
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


router.get('/fakedata', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            country = req.query.country
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
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


router.get('/hilih', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
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


router.get('/liriklagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/lirik?search=${lagu}`))
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


router.get('/chordlagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
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


router.get('/random/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
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


router.get('/kbbi', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
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


router.get('/covidindo', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
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


router.get('/covidworld', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
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


router.get('/kodepos', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kota = req.query.kota
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
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


router.get('/cuaca', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kabupaten = req.query.kabupaten
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
	if(!kabupaten) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kabupaten"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/cuaca?kabupaten=${kabupaten}`))
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


router.get('/random/meme', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
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


router.get('/quotes/kanye', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=kanye`))
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


router.get('/translate', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
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


router.get('/anime/kusonime', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
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


router.get('/gabut', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/bosan`))
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


router.get('/manga', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
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


router.get('/random/wallpaper', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/random/wallpaper?genre=acak`))
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


router.get('/kuis/caklontong', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
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


router.get('/yt/play', async (req, res, next) => {
	var vid = [];
	var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

	var videos = []
	ytplay(search).then(async (resplay) => {
			var gasplay = resplay[0]
			
			ytdldown(gasplay,'multi')
			.then(result => {
				res.json({status:true,creator:creator,result})
			})
			.catch (e=>{
				console.log('Error :', color(e,'red'))
				res.json(loghandler.error)
			})
	})
	.catch (e => {
		console.log('Error : ', color(e,'red'))
	})
})



router.get('/yt/search', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
	try {
scrapeYt.search(search, {
    type: "video"
}).then(videos => {
    res.json(videos);
})
} catch (err) {
    console.log('Error :', color(err, 'red'))
    res.json(loghandler.error)
  }
})

router.get('/yt', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!url) return res.json(loghandler.noturl)
	let playlistregex = /\/playlist\?list=/;
	let result = []
	try {
		if (playlistregex.test(url)){
			ytpl(url)
			.then(info => info.items)
			.then(info => {
				let video
				for(video of info){
					result.push({
						title: video.title,
						id: video.id,
						duration: video.duration
					})
				}
				res.json({
					status:true,
					creator: creator,
					result,
					message: 'jangan lupa follow ' + creator
				})
			})
			.catch(e => {
				console.log(e)
				res.json(loghandler.error)
			})
		} else {
			ytdl.getInfo(url)
			.then(info => {
				let duration = (info.lengthSeconds/60).toString()
				duration = duration.substring(0, duration.indexOf('.'))+':'+Math.floor((info.lengthSeconds%60).toString())
				const max = info.videoDetails.thumbnails.reduce((prev, current) => ((prev.height > current.height) ? prev : current));
					result.push({
						    id: info.videoDetails.videoId,
                            title: info.videoDetails.title,
                            description: info.videoDetails.description,
                            length: info.videoDetails.lengthSeconds,
                            view: info.videoDetails.viewCount,
                            date: info.videoDetails.publishDate,
                            thumbnail: max,
                            video:info.formats
                })
                res.json({
				status:true,
				creator: creator,
                result,
                message: 'jangan lupa follow ' + creator
                })
			})
			.catch (er => {
				console.log(er)
				res.json(loghandler.error)
				})
				}
				} catch (e) {
					console.log(e)
					res.json(loghandler.error)
					} 
	if (url && type == 'audio') {
		try {
    res.header('Content-Disposition', `attachment; filename="audio-zefian.mp3"`);
    ytdl(url, {
      format: 'mp3',
      filter: 'audioonly',
      filter: 'audioonly'
      }).pipe(res);

  } catch (err) {
    res.json(loghandler.error)
    console.log(loghandler.error)
  }
		} else if (url && type == 'video'){
			try {
    res.header('Content-Disposition', `attachment; filename="video-zefian.mp4"`);
    ytdl(url, {
      format: 'mp4',
    }).pipe(res);

  } catch (err) {
    res.json(loghandler.error)
    console.log(loghandler.error)
  }
  } 
})


router.get('/igdown', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!url) return res.json(loghandler.noturl)

    var str = url
    var potong = str.split('?')
    var graph = "?__a=1"
    var potong2 = potong[0] + graph

    fetch(encodeURI(potong2))
        .then(response => response.json())
        .then(data => {
            var validasi = data["graphql"]["shortcode_media"]["__typename"];
            if (validasi == "GraphVideo") {
                var link = data.graphql.shortcode_media.video_url;
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result: {
                        type: "Video",
                        url: link
                    },
                    message: "jangan lupa follow" + creator
                })
            } else if (validasi == "GraphImage") {
                var link = data.graphql.shortcode_media.display_url;
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result: {
                        type: "Picture",
                        url: link
                    },
                    message: "jangan lupa follow" + creator
                })
            } else {
                res.json({
                    status: false,
                    creator: `${creator}`,
                    message: "mungkin terjadi error"
                })
            }
        })
        .catch(e => {
            console.log('Error:', color(e,'red'))
            res.json({status:false,creator: `${creator}`, message: "gagal, pastikan url anda benar:)"})
       })
})

router.get('/igstalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)
    if (!username) return res.json(loghandler.notusername)

    fetch(encodeURI(`https://www.instagram.com/${username}/?__a=1`))
        .then(response => response.json())
        .then(data => {
             var bisnis_or = data.graphql.user.is_business_account == false ? "bukan bisnis": "ini bisnis"
             var verif_or =  data.graphql.user.is_verified == false ? "belum verified / centang biru": "sudah verified / centang biru"
             var response = {
                 status: true,
                 creator: `${creator}`,
                 result: {
                      username: `${data.graphql.user.username}`,
                      name: `${data.graphql.user.full_name}`,
                      biodata: `${data.graphql.user.biography}`,
                      followers: `${data.graphql.user.edge_followed_by.count}`,
                      following:`${data.graphql.user.edge_follow.count}`,
                      verified: verif_or,
                      business_account: bisnis_or,
                      post: `${data.graphql.user.edge_owner_to_timeline_media.count}`,
                      profile_picture: `${data.graphql.user.profile_pic_url}`,
                      profile_picture_hd: `${data.graphql.user.profile_pic_url_hd}`,
                 },
                 message: `jangan lupa follow ${creator}`
             }
             res.json(response)
        })
})



router.get('/kuis/tebakgambar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'GFL') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=tebakgambar`))
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


module.exports = router

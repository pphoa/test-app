const fs = require('fs');

const welcome = 'Welcome to Planet Earth! Different territories here are called countries, and we have 195 of these plus many other regional islands! Each of these countries and islands have flags. \n Here you will find some of the more aesthetically-pleasing flags of countries and islands that people probably have never even heard of :)'

const vanuatu = 'Vanuatu is a country in the Pacific Ocean.'
const vanuatu1 = 'Capital: Port Vila. Population: 272,459. Languages: Bislama, English, French.'
const vanuatu2 = 'Spectacular coral reefs and canyons take a backseat in Vanuatu, where WWII left a lasting legacy of shipwrecks. The best known, the S.S. President Coolidge, was a luxury liner converted to a troop ship when it ran into a "friendly fire" U.S. mine just off Espiritu Santo. Port Vila is the charter-fishing gateway for the likes of marlin, sailfish, tuna, mahi-mahi, and wahoo, but light-tackle fishing along the island\'s reefs (and those of Efate) is a ticket to a different kind of blue water rod play. During April and May, men on Pentecost Island climb to the top of a 100-foot-high timber platform, tie vines around their ankles, and leap off ... in a time-honored yam harvest fertility rite known as naghol.'

const lucia = 'St. Lucia is a country in the Caribbeans.'
const lucia1 = 'Capital: Castries. Population: 181,889. Language: English.'
const lucia2 = 'Saint Lucia has more mountains than most other Caribbean islands, and was formed as a result of volcanic activity. The Pitons mountain range is a Saint Lucian landmark and a UNESCO World Heritage Site.'

const sey = 'Seychelles is a country in the Indian Ocean off the coast of Madagascar.'
const sey1 = 'Capital: Victoria. Population: 97,096. Languages: English, French, Seychellois Creole.'
const sey2 = 'The beautiful country is blessed with deep blue waters and white sandy beaches with exotic sea life, becoming a famous honeymoon destination. The native Coco de mer, also known as the sea coconut or double coconut, produces the heaviest (about 15kg) and largest seed in the world. Seychelles was the land of pirates, in particular Anse Forbans (Pirate’s Cove) on Mahé Island and Côte d’Or on Praslin. The pirates used to seek the islands as a hideout and it is believed that a treasure worth more than $160,000 was hidden by Olivier Levasseur at the time. It hasn’t been discovered yet.'

const aland = 'Aland Islands is an autonomous group of islands between Sweden and Finland.'
const aland1 = 'Capital: Mariehamn. Population: 29,884. Language: Swedish.'
const aland2 = 'Åland’s autonomous status means that the island group has its own government, language and cultural policy. Åland is great for touring on a bike. Roads are flat and ferries and bridges link the numerous islands together. Everywhere is suitable for families and the sightseeing starts as soon as you hop on your bike. Bikes can either be brought over on the ferry or rented in Mariehamn.'

exports.index = function(req, res, next) {
  res.render('index', { about: welcome , flag_name:
 'Flags'});
}

exports.comp = function(req, res, next) {
  res.render('comp', {about:'Compare flags'});
}

exports.earth = function(req, res, next) {
   res.render('index', { about: welcome, flag_name:'Flags'}); 
}

exports.vanuatu = function(req, res, next) {
	fs.readFile('controllers/counts.json', (err, cnt) => {
		if (err) throw err;

		res.render('vanuatu', { votes: JSON.parse(cnt.toString()).vanuatu, about: vanuatu, about1: vanuatu1, about2: vanuatu2, flag_name:'Vanuatu'});
	})
}

exports.vote_vanuatu = function(req, res, next) {

	fs.readFile('controllers/counts.json', (err, cnt) => {
		if (err) throw err;

		// Get dictionary value and increment
		let dict = JSON.parse(cnt.toString())
		dict.vanuatu++;	
	
		// Update JSON file
		fs.writeFile('controllers/counts.json', JSON.stringify(dict), (err) => {
			if (err) throw err;
		})
		
		res.render('vanuatu', { votes: dict.vanuatu, about: vanuatu, about1: vanuatu1, about2: vanuatu2, flag_name:'Vanuatu'});
	})
}


exports.seychelles = function(req, res, next) {

	fs.readFile('controllers/counts.json', (err, cnt) => {
		if (err) throw err;

		res.render('seychelles', { votes: JSON.parse(cnt.toString()).seychelles, about: sey, about1: sey1, about2: sey2 , flag_name:'Seychelles'}); 
	})

}

exports.vote_seychelles = function(req, res, next) {

	fs.readFile('controllers/counts.json', (err, cnt) => {
		if (err) throw err;

		// Get dictionary value and increment
		let dict = JSON.parse(cnt.toString())
		dict.seychelles++;	
	
		// Update JSON file
		fs.writeFile('controllers/counts.json', JSON.stringify(dict), (err) => {
			if (err) throw err;
		})

		res.render('seychelles', { votes: dict.seychelles, about: sey, about1: sey1, about2: sey2 , flag_name:'Seychelles'}); 

	})

}


exports.aland = function(req, res, next) {
	
	fs.readFile('controllers/counts.json', (err, cnt) => {
		if (err) throw err;

		res.render('aland', { votes: JSON.parse(cnt.toString()).aland, about: aland, about1: aland1, about2: aland2, flag_name:'Aland Islands'}); 
	})
	
}

exports.vote_aland = function(req, res, next) {

	fs.readFile('controllers/counts.json', (err, cnt) => {
		if (err) throw err;

		// Get dictionary value and increment
		let dict = JSON.parse(cnt.toString())
		dict.aland++;	
	
		// Update JSON file
		fs.writeFile('controllers/counts.json', JSON.stringify(dict), (err) => {
			if (err) throw err;
		})

		res.render('aland', { votes: dict.aland, about: aland, about1: aland1, about2: aland2, flag_name:'Aland Islands'}); 
	})

}

exports.lucia = function(req, res, next) {

	fs.readFile('controllers/counts.json', (err, cnt) => {
		if (err) throw err;

		res.render('lucia', { votes: JSON.parse(cnt.toString()).lucia, about: lucia, about1: lucia1, about2: lucia2, flag_name:'St. Lucia'}); 
	})
}

exports.vote_lucia = function(req, res, next) {

	fs.readFile('controllers/counts.json', (err, cnt) => {
		if (err) throw err;

		// Get dictionary value and increment
		let dict = JSON.parse(cnt.toString())
		dict.lucia++;	
	
		// Update JSON file
		fs.writeFile('controllers/counts.json', JSON.stringify(dict), (err) => {
			if (err) throw err;
		})

		res.render('lucia', { votes: dict.lucia, about: lucia, about1: lucia1, about2: lucia2, flag_name:'St. Lucia'}); 

	})

}


exports.map = function(req, res, next) {
   res.render('map', { markers: 'Markers will go here.'}); 
}


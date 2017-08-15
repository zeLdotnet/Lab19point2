var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

var phrases = [

		"I\'\m just bout that action, boss. - Marshawn Lynch",
		"Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV. - Morty Smith",
		"Sometimes science is more art than science, Morty. Lot of people don't get that. - Rick Sanchez",
		"Get Schwifty - Rick Sanchez",
		"Get off the high road Summer. We all got pink eye because you won't stop texting on the toilet. - Rick Sanchez",
		"I\'\m just here so I won\'t get fined. - Marshawn Lynch",
		"It's fine, everythings is fine. There's an infinite number of realities Morty, and in a few dozens of those I got lucky and turned everything back to normal. - Rick Sanchez",
		"You're our boy dog, don't even trip - Rick Sanchez",
		"Wow, I really Cronenberged up the whole place, huh Morty? Just a bunch a Cronenbergs walkin' around - Rick Sanchez",
		"If it takes nine seasons, I want my McNugget dipping sauce, Szechuan sauce, Morty. - Rick Sanchez",
		"Joffrey...Cersei...Walder Frey...Meryn Trant...Tywin Lannister...The Red Woman...Beric Dondarrion...Thoros of Myr...The Mountain...The Hound. - Arya Stark",
		"I'm Tiny Riiiiiiiick! - Rick Sanchez",
		"Is your intention to abandon Rick, using his own portal gun? In bird culture, this is considered a d!$k move. - Bird Person",
		"We are created to serve a singular purpose, for which we will go to any lengths to fulfill! - Mr.Meeseeks",
		"are you hungry for apples? ARE YOU HUNGRY FOR APPLESSS!? - Jerry Smith",
		"25 shmeckles? I-I-I-I don't even know what that- what is that? Is that a lot? - Rick Sanchez",
		"With all due respect; I don't need your permission. I'm a king. - Jon Snow",
		"Choas is a ladder. - Bran Stark",
		"Leave one wolf alive, and the sheep are never safe. - Arya Stark",
		"A lion doesn't concern himself with the opinions of a sheep. - Tywin Lannister", 
		];

app.get('/api/phrases', function(req, res){

	res.send(phrases);
});

app.get('/api/random-phrase', function(req, res){
	
	function random(){
		num = Math.floor(Math.random() * 20);
	  	quote = phrases[num];
	  	console.log(quote);

	  	return quote;
	}

	res.send(random());
});

var server = app.listen(3000, function () {
	var port = server.address().port;
	console.log('Example app listening at http://localhost:%s', port);
});

var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

var phrases = [

		{
			quote: "I\'\m just bout that action, boss. - Marshawn Lynch",
			img: "images/money lynch.jpg"
		},
		{
			quote: "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV. - Morty Smith",
			img: "images/morty smith.jpg"
		},
		{
			quote: "Sometimes science is more art than science, Morty. Lot of people don't get that. - Rick Sanchez", 
			img: "images/science.jpg"
		},

		{
			quote: "Get Schwifty - Rick Sanchez", 
			img: "images/schwifty.jpg"
		},
		{
			quote: "Get off the high road Summer. We all got pink eye because you won't stop texting on the toilet. - Rick Sanchez", 
			img: "images/summer.jpg"
		},
		{
			quote: "I\'\m just here so I won\'t get fined. - Marshawn Lynch", 
			img: "images/money lynch.jpg"
		},
		{
			quote: "It's fine, everythings is fine. There's an infinite number of realities Morty, and in a few dozens of those I got lucky and turned everything back to normal. - Rick Sanchez",
			img: "images/rickandmorty.jpg"},
		{
			quote: "You're our boy dog, don't even trip - Rick Sanchez", 
			img: "images/tripnot.jpg"
		},
		{
			quote: "Wow, I really Cronenberged up the whole place, huh Morty? Just a bunch a Cronenbergs walkin' around - Rick Sanchez", 
			img: "images/rick.jpg"
		},
		{
			quote: "If it takes nine seasons, I want my McNugget dipping sauce, Szechuan sauce, Morty. - Rick Sanchez", 
			img: "images/szechuan sauce.jpg"
		},
		{
			quote: "Joffrey...Cersei...Walder Frey...Meryn Trant...Tywin Lannister...The Red Woman...Beric Dondarrion...Thoros of Myr...The Mountain...The Hound. - Arya Stark", 
			img: "images/arya stark.jpg"
		},
		{
			quote: "I'm Tiny Riiiiiiiick! - Rick Sanchez", 
			img: "images/tinyrick.jpg"
		},
		{
			quote: "Is your intention to abandon Rick, using his own portal gun? In bird culture, this is considered a d!$k move. - Bird Person", 
			img: "images/Birdperson.png"
		},
		{
			quote: "We are created to serve a singular purpose, for which we will go to any lengths to fulfill! - Mr.Meeseeks", 
			img: "images/meeseeks.png"
		},
		{
			quote: "are you hungry for apples? ARE YOU HUNGRY FOR APPLESSS!? - Jerry Smith", 
			img: "images/jerry.png"
		},
		{
			quote: "25 shmeckles? I-I-I-I don't even know what that- what is that? Is that a lot? - Rick Sanchez", 
			img: "images/szechuan sauce.jpg"
		},
		{
			quote: "With all due respect; I don't need your permission. I'm a king. - Jon Snow", 
			img: "images/jon snow.jpg"
		},
		{
			quote: "Choas is a ladder. - Bran Stark", 
			img: "images/Bran.jpg"
		},
		{
			quote: "Leave one wolf alive, and the sheep are never safe. - Arya Stark", 
			img: "images/arya stark.jpg"
		},
		{
			quote: "A lion doesn't concern himself with the opinions of a sheep. - Tywin Lannister", 
			img: "images/tywin.jpg"
		} 
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

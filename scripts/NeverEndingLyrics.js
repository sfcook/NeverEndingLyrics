var _data = {songs:[
	{
		title: "Song That Never Ends",
		lyrics: ["This is the song that never ends", "It just goes on and on my friend", "Some people started singing it not knowing what it was,", "And they'll continue singing it forever just because . . ."]
	},
	{
		title: "Gets On Everybody's Nerves",
		lyrics: ["I know a song that gets on everybody's nerves,", "Everybody's nerves, everybody's nerves,", "I know a song that gets on everybody's nerves,", "and this is how it goes."]
	},
	{
		title: "Bob The Goldfish",
		lyrics: ["Hey! I'm Bob! I'm a goldfish. And a goldfish has a memory span of -"]
	}]
};
var _currentSong;

$(document).ready(function() {
	loadSongs();
	_currentSong = _data.songs[0];
	loadSong();
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
       addLyric();
   }
});

$(document).on('change','#song',function(){
	_data.songs.forEach(function(entry){
		if(entry.title == $('#song option:selected').text())
		{
			_currentSong = entry;
		}
	});
	loadSong();
});

function loadSongs()
{
	_data.songs.forEach(function(entry){
		$('#song').append($('<option>', { value : entry.title, key: entry.title })
		.text(entry.title)); 
	})
}

function loadSong()
{
	$('#lyrics').empty();
	while($(window).height() >= $(document).height())
	{
		addLyric();
	}
}

function addLyric()
{
	_currentSong.lyrics.forEach(function(entry){
		$('#lyrics').append($('<p>').text(entry));
	});
	$('#lyrics').append($('<p>').html('&nbsp;'));
}
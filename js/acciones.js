// JavaScript Document
var audio;
$(document).ready(function(e) {
	document.addEventListener("deviceready", function(){
		audio = window.plugins.LowLatencyAudio;
		audio.preloadFX('do', 'audio/DO.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('re', 'audio/RE.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('mi', 'audio/MI.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('fa', 'audio/FA.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('sol', 'audio/SOL.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('la', 'audio/LA.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('si', 'audio/SI.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		
		audio.preloadFX('doS', 'audio/DO#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('reS', 'audio/RE#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('faS', 'audio/FA#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('solS', 'audio/SOL#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('laS', 'audio/LA#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		
		audio.preloadFX('doSos', 'audio/DOSos#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('reSos', 'audio/RESos#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('faSos', 'audio/FASos#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('solSos', 'audio/SOLSos#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		audio.preloadFX('laSos', 'audio/LASos#.mp3', function(msg){}, function(msg){alert ('Error: ' + msg);});
		
		
		$('.nota').bind('touchstart', function(){
			$(this).addClass('tocada');
			audio.play($(this).attr('id'));
		}).bind('touchend', function(){
			$(this).removeClass('tocada');
		});
		$('.nota1').bind('touchstart', function(){
			$(this).addClass('tocada');
			audio.play($(this).attr('id'));
		}).bind('touchend', function(){
			$(this).removeClass('tocada');
		});
	});
});
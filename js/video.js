var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML= video.volume *100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= .90
	console.log("New speed" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= .90
	console.log("New speed" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10

	if (video.currentTime >= video.duration)
		video.currentTime = 0
	console.log("Video current time is" + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		console.log("Video Unmuted")
		video.muted = false
		this.innerHTML = "Mute"
	}
	else {
		console.log("Mute")
		video.muted = true
		this.innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Current Volume" + video.volume)
	video.volume = this.value/100
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	console.log("Volume updating to" + video.volume)
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.add("oldSchool")
});
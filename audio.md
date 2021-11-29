---
layout: default
title: audio
---

<h1>Example of audio embed, the HTML5 way. No need for Flash.</h1> 
<hr>

<h2>1. The audio player</h2> 

<audio controls> 
<source src="https://martinbarge.github.io/sml5202-sts/assets/audio/FullExtract.ogg" type="audio/ogg"> 
<source src="https://martinbarge.github.io/sml5202-sts/assets/audio/FullExtract.mp3" type="audio/mpeg">
Your browser does not support the audio tag.
</audio>

<hr>

<h2>2. H5P audio player</h2> 
<p>H5P provides an audio player application, named 'Audio', to which you upload your audio file and then embed on your site, like so:</p>

<iframe src="https://h5p.org/h5p/embed/439512" width="1090" height="65" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>

<hr>

<h2>3. Other methods of playing audio</h2>
<p>JavaScript includes the 'play()' method, enabling you call a function to play audio when a page element is clicked.</p>
<p>The following are examples of page elements that play a sound when clicked.</p>

<h3>i) Text that plays sound when clicked</h3>
<p>Some text such as <a href="#" onClick="playSound('audio1');event.preventDefault();">psychology</a>.</p>

<hr>
<h3>ii) Buttons that play sounds when clicked</h3>

<form> 
<input id="submit" type="button" value="psychology" onClick="playSound('audio1')"> 
<input id="submit" type="button" value="physiology" onClick="playSound('audio2')"> 
</form>

<hr>
<h3>iii) An image that plays a sound when clicked</h3>
<a id="image" onClick="playSound('audio3')"><img
src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Ostafrikanisches_Spitzmaulnashorn.JPG" style="width:256px; cursor: pointer;" /></a> 
<hr>

<!--The Audio Elements -->
<audio id="audio1"> 
<source src="https://martinbarge.github.io/sml5202-sts/assets/audio/psych.ogg" type="audio/ogg">
<source src="https://martinbarge.github.io/sml5202-sts/assets/audio/psych.mp3" type="audio/mpeg"> 
</audio> 

<audio id="audio2">
<source src="https://martinbarge.github.io/sml5202-sts/assets/audio/physiology.ogg" type="audio/ogg">
<source src="https://martinbarge.github.io/sml5202-sts/assets/audio/physiology.mp3" type="audio/mpeg"> 
</audio> 

<audio id="audio3"> 
<source src="https://martinbarge.github.io/sml5202-sts/assets/audio/rhino.ogg" type="audio/ogg"> 
<source src="https://martinbarge.github.io/sml5202-sts/assets/audio/rhino.mp3" type="audio/mpeg"> 
</audio>

<!-- JavaScript Function -->
<script> 
function playSound(soundobj) { 
let thissound=document.getElementById(soundobj); 
thissound.play();
}
</script>

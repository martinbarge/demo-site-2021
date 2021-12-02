---
layout: default
title: audio
---

<h1>Example of audio embed, the HTML5 way.</h1> 
<p id="part1">&nbsp;</p>
<h2>1. The audio player</h2> 
<audio controls> 
<source src="https://martinbarge.github.io/sml5202-sts/assets/audio/FullExtract.ogg" type="audio/ogg"> 
<source src="https://martinbarge.github.io/sml5202-sts/assets/audio/FullExtract.mp3" type="audio/mpeg">
Your browser does not support the audio tag.
</audio>

<hr>
<p id="part2">&nbsp;</p>
<h2>2. H5P audio player</h2> 
<p>H5P provides an audio player application, named 'Audio', to which you upload your audio file and then embed on your site, like so:</p>

<iframe src="https://h5p.org/h5p/embed/439512" width="1090" height="65" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>

<hr>
<p id="part3">&nbsp;</p>
<h2>3. Other methods of playing audio</h2>
<p id="part3">JavaScript includes the 'play()' method, enabling you call a function to play audio when a page element is clicked.</p>
<p>The following are examples of page elements that play a sound when clicked.</p>

<h3>i) Text that plays sound when clicked</h3>
<p>Some text such as <a href="#" onClick="playSound('https://martinbarge.github.io/sml5202-sts/assets/audio/psych.mp3');event.preventDefault();">psychology</a>.</p>

<hr>
<h3>ii) Buttons that play sounds when clicked</h3>

<form> 
<input id="submit" type="button" value="psychology" onClick="playSound('https://martinbarge.github.io/sml5202-sts/assets/audio/psych.mp3')"> 
<input id="submit" type="button" value="physiology" onClick="playSound('https://martinbarge.github.io/sml5202-sts/assets/audio/physiology.mp3')"> 
</form>

<hr>
<h3>iii) An image that plays a sound when clicked</h3>
<a id="image" onClick="playSound('https://martinbarge.github.io/sml5202-sts/assets/audio/rhino.mp3')"><img
src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Ostafrikanisches_Spitzmaulnashorn.JPG" style="width:256px; cursor: pointer;" /></a> 
<hr>

<!-- JavaScript Function -->
<script>
function playSound(soundObj) {
var audio = new Audio(soundObj);
audio.play();
}
</script>

<h3>Javascript Code</h3>
<p>The following code extracts illustrate how to attach sounds to page elements, using JavaScript.</p>

<p>First, we need to include this simple JavaScript function to play sounds:</p>

```
<script>
function playSound(soundObj) {
var audio = new Audio(soundObj);
audio.play();
}
</script>
```

<p>Now we can call the JavaScript function from any page element. The following entries show how to do this.</p>

<p>1. This first entry shows the function attached to a button object.</p>

```
<input id="submit" type="button" value="psychology" onClick="playSound('https://martinbarge.github.io/sml5202-sts/assets/audio/psych.mp3')"> 
```

<p>2. This next entry shows the function attached to a link text.</p>

```
<p><a href="#" onClick="playSound('https://martinbarge.github.io/sml5202-sts/assets/audio/psych.mp3');event.preventDefault();">LINK TEXT</a>.</p>
```

<p>3. This final extract shows the function attached to an image.</p>

```
<a id="image" onClick="playSound('https://martinbarge.github.io/sml5202-sts/assets/audio/rhino.mp3')">
<img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Ostafrikanisches_Spitzmaulnashorn.JPG" style="width:256px; cursor: pointer;" />
</a>
```
<p>Try copying the javascript code into one of your pages, and then add the button code and see how it works.</p>
<hr>


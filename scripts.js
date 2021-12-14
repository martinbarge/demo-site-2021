


function loadIdiom(){

var request = new XMLHttpRequest();
request.open('GET', 'https://martinbarge.github.io/sml5202-sts/datasets/idioms.json', true);
request.onload = function() {

var data = JSON.parse(this.response);

let i = Math.floor(Math.random() * data.idioms.length);

let text = "<dl><dt>" + data.idioms[i].idiom + "</dt><dd>Meaning: " + data.idioms[i].meaning + "</dd><dd>Example:<em> " + data.idioms[i].example + "</em></dd></dl>";
  
document.getElementById("test").innerHTML = text;

}

request.send();

}

myBtn.addEventListener("click", loadIdiom);
document.getElementById("test").onload = loadIdiom();


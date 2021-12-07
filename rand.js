// Code for random french word Generator
// word Dict with {fr:en} words
const wordDict = {
	partie: "part",
	histoire: "history",
	chercher: "search",
	seulement: "only",
	police: "police",
	pensais: "thought",
	aide: "help",
	demande: "request",
	genre: "kind",
	mois: "month",
	frère: "brother",
	laisser: "to leave",
	car: "because",
	mettre: "to put",
	aucun: "no",
	laisse: "leash",
	eux: "them",
	ville: "city",
	chaque: "each",
	parler: "to speak",
	faire: "to do",
	arriver: "to come",
	devrait: "should",
	bébé: "baby",
	longtemps: "long time",
	heures: "hours",
	découvrir: "to discover",
	monde: "world",
	pendant: "while",
	revoir: "meet again",
	aucune: "any",
	place: "square",
	comprendre: "to understand",
	savoir: "to know",
	être: "to be",
	attention: "Warning",
	voici: "here is",
	pouvoir: "to be able to",
	donner: "to give",
	leurs: "their",
	train: "train",
	corps: "body",
	endroit: "place",
	yeux: "eyes",
	façon: "way",
	écouter: "to listen",
	dont: "whose",
	trouver: "to find",
	premier: "first",
	perdre: "to lose",
	main: "hand",
	première: "first",
	côté: "side",
	vieux: "old",
	sois: "be",
	tiens: "here",
	matin: "morning",
	tellement: "so much",
	enfant: "child",
	point: "point",
	ensuite: "after",
	pardon: "sorry",
	venir: "to come",
	devant: "in front of",
	vers: "towards",
	minutes: "minutes",
	demandé: "request",
	chambre: "bedroom",
	mis: "placed",
	belle: "beautiful",
	droit: "law",
	aimer: "to like",
	"aujourd'hui": "today",
	mari: "husband",
	cause: "cause",
	enfin: "finally",
	espère: "hope",
	eau: "water",
	attendre: "to wait",
	partir: "to leave",
	nouvelle: "new",
	travaill: "job",
	arrêter: "to stop",
	dire: "to say",
	terre: "Earth",
	compte: "account",
	loin: "far",
	fin: "end",
	croire: "to believe",
	chérie: "sweetheart",
	gros: "large",
	plutôt: "rather",
	avoir: "to have",
	filles: "girls",
	jouer: "to play",
	bureau: "office",
};

// get random key from wordDict
const randomKey = (obj) => {
	var keys = Object.keys(obj);
	return keys[(keys.length * Math.random()) << 0];
};

// button object
const randWordBtn = document.getElementById("randWordBtn");

// add event listener to button with function set html elemtns for en/fr random words
  randWordBtn.addEventListener("click", (e) => {
	const randFrWord = randomKey(wordDict);
	const randEnWord = wordDict[randFrWord];
	document.getElementById("randFrWord").innerHTML = randFrWord;
	document.getElementById("randEnWord").innerHTML = randEnWord;
});

// Speech synthesis code
const speak = (msg, isFrench) => {
	// creat SpeechSynthesisUtterance instance
	let speech = new SpeechSynthesisUtterance();

	// ternary operator for changing speech language
	speech.lang = isFrench ? "fr" : "en-US";

	speech.text = msg;
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;

	window.speechSynthesis.speak(speech);
};

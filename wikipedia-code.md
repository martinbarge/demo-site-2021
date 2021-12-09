---
layout: default
title: wikipedia code
---

<h1>Wikipedia Search Codes</h1>
<h2>Step 1</h2>
<p>First, make a new JavaScript file in your repository area and name it 'wiki.js'</p>
<p>Next copy the following code and paste it into your wiki.js file:</p>

```

function handleSubmit(event) {
    // prevent page from reloading when form is submitted
  event.preventDefault();
  // get the value of the input field
  const input = document.querySelector('.searchForm-input').value;
  // remove whitespace from the input
  const searchQuery = input.trim();
  // call `fetchResults` and pass it the `searchQuery`
  fetchResults(searchQuery);
}

function fetchResults(searchQuery) {
	  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchQuery}`;
  	fetch(endpoint)
  		.then(response => response.json())
  		.then(data => {
        const results = data.query.search;
  	  	displayResults(results);
		})
       .catch(() => document.querySelector('.searchForm-input').value = 'Please enter a search term.');
       //.catch(() => console.log('An error occured'));
}

function displayResults(results) {
  const searchResults = document.querySelector('.searchResults');
  searchResults.innerHTML = '';
  results.forEach(result => {
  const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);
  
  searchResults.insertAdjacentHTML('beforeend',
  
  `<div class="resultItem">
  <h3 class="resultItem-title">
  <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
  </h3>
  <span class="resultItem-snippet">${result.snippet}</span><br>
  <a href="${url}" class="resultItem-link" target="_blank" rel="noopener">${url}</a>
  </div>`
  );
  
});

console.log(results);
}
const form = document.querySelector('.searchForm');
form.addEventListener('submit', handleSubmit);

```

<h2>Step 2</h2>
<p>Change the language entries depending on your chosen Wikipedia language.</p>
<p>Look at the code above. You will see two URL entries where the code states 'en.wikipedia.org'.</p>
<p>You will need to change the 'en' to the language of your choice. A full list of languages can be found on <a href="https://en.wikipedia.org/wiki/Main_Page">the Wikipedia main page</a>. For example, French is 'fr.wikipedia.org', Spanish 'es.wikipedia.org'.</p>

<hr />
<h2>Step 3</h2>
<p>Next, copy this HTML code into one of your pages:</p>

```

<script src="wiki.js"></script>
<header class="searchForm-container">
<img src="https://image.ibb.co/e6vOFQ/wikipedia.png" alt="Wikipedia Logo">
<form class="searchForm">
        <input type="search" class="searchForm-input">
        <button type="submit" class="icon searchIcon">
          <img src="https://image.ibb.co/cpG8zk/search.png" alt="Magnifying Glass Icon">
        </button>
      </form>
</header>
<section class="searchResults"></section>

<div style="clear:both;"></div>

<div><p style="font-size: 86%;">Credit: The code for this application is derived from an excellent online tutorial by Ayooluwa Isaiah, a Web Technologies Software Developer based in Lagos, Nigeria. The tutorial can be followed <a href="https://freshman.tech/wikipedia-javascript/">here</a>.</p></div>

```

<p>Note: the last part of the above HTML is simply a reference to the code acknowledgement!. The important part is the searchResults section.</p>

<h2>Step 4</h2>
<p>Copy the following stylesheet code and paste it at the end of your assets/css/style.scss file:</p>

```

/** Wikipedia Search Styles **/

*, *::before, *::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


.searchForm-container {
  width: 100%;
  height: 100px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
 /* padding-left: 50px; */
}

.searchForm {
  margin-left: 30px;
  display: flex;
  background-color: #292929;
  border: 1px solid #242424;
  border-radius: 4px;
  /*width:80%;*/
}

.searchForm-input {
  background-color: #f0f0f5;
  border: none;
  height: 44px;
  width: 100%;
  padding: 5px 10px;
  color: #292929;
}

.icon {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border: none;
  background-color: #292929;
}

.icon:hover {
  background-color: #1f1f1f;
}

.icon img {
  width: 22px;
  height: 22px;
}

.searchResults {
  padding: 20px 0 50px;
  margin-top: 2px;
  width: 100%;
  text-align: left;
  background-color: white;
}

.resultItem {
  opacity: 0;
  margin-bottom: 20px;
  animation: show 0.5s forwards ease-in-out;
  color: #292929;
  border-radius: 2px;
  padding: 10px;
  width: 100%;
}


.resultItem:hover {
  background-color: aliceblue;
}

.resultItem-title {
  margin-bottom: 4px;
}

.resultItem-title a {
  color: black;
  text-decoration: none;
}

.resultItem-title a:hover {
  text-decoration: underline;
}

.resultItem-snippet, .resultItem-link {
  color: darkSlateGray;
  font-size: 13px;
}

@keyframes show {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


@media screen and (max-width: 750px) {

  .searchForm-container {
    padding: 20px 0 20px;
    height: auto;
    justify-content: space-between;  
    flex-direction: column;
  }

  .searchForm {
    margin: 20px auto 0;
  }

  .searchForm-input {
    width: 300px;
  }

  .searchResults {
    width: 388px;
    margin-left: auto;
    margin-right: auto;
  }
}

/* End Wikipedia Search Styles */

```

<h2>Step 5</h2>
<p>Commit all of your changes and test your Wikipedia search tool.</p>


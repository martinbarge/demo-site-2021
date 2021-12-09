---
layout: default
title: wikipedia
---
<h1>Wikipedia search tool</h1>
<p>This example searches the English Wikipedia site. Type a term into the box and see the results appear on this page.</p>
<p>Note: In this example, it is placed within a column container. However, it can be simply included in a full page too.</p>

<div class="row">
<div class="col-sm-4">
<p><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" style="width:100%" /></p>
<p>Flag of Portugal</p>
</div>
<div class="col-sm-8">
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
</div>
</div>

<hr>
<div style="clear:both;"></div>


<h2>Steps and code to include this feature.</h2>
<p><a href="wikipedia-code.html">Visit this page</a> for basic instructions and code for this feature.</p>


<div>
	<p style="font-size: 86%;">Credit: The code for this application is derived from an excellent online tutorial by Ayooluwa Isaiah, a Web Technologies Software Developer based in Lagos, Nigeria. The tutorial can be followed <a href="https://freshman.tech/wikipedia-javascript/">here</a>.</p></div>
<script src="wiki.js"></script>

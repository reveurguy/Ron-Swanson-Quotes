var btn= document.querySelector("#btn");
var quote= document.querySelector("#quote");
var url= 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var tweetbtn= document.querySelector("#twitterbtn");

btn.addEventListener("click",function () {
    fetch(url)
    .then(function(req){
        req.json().then(function(data){
            quote.innerText= data[0];
        })
    })
});

tweetbtn.addEventListener("click", function() {
  tweetIt ();
});

function tweetIt () {
  var phrase = quote.innerText;
  var tweetUrl = "https://twitter.com/intent/tweet?&text=\"" + encodeURIComponent(phrase) + "\"  - Ron Swanson &hashtags=PARKSANDREC&hashtags=RONSWANSON&url=https://reveurguy.github.io/Ron-Swanson-Quotes/"; 
  window.open(tweetUrl);
}
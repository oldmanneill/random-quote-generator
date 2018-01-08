$(document).ready(function() {
  function getQuote(){  
    var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url,function(data){
      $(".quote").text(data.quoteText); 
      var author = data.quoteAuthor;
      if (author == "") {
          author = "Anonymous";
          };
      $(".author").text("-" + author);
      tweetUrl = "https://twitter.com/home/?status=" +data.quoteText + " -"+author; 
    });
  };
  getQuote();
  var tweetUrl;
  $('#newQuote').on('click', function(){
        getQuote();
      });
  $('#twitter').on('click', function(){
        window.open(tweetUrl);
      });
});
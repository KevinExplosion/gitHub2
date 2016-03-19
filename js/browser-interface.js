var apiKey = require('./../.env').apiKey;
var gitName;

$(document).ready(function() {
  $('#searchButton').click(function() {
    var gitName = $("#searchGit").val();
    $('#searchGit').val("");
    $.get('https://api.github.com/users/'+ gitName +'?access_token=' + apiKey).then(function(response){
      // console.log(response);
      $('.showGitName').text("Repositories for");
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
      $('.showGitName').text(error.message);
    });
  });
});

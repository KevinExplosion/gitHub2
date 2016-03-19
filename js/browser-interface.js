var apiKey = require('./../.env').apiKey;
var gitName;
var login;

$(document).ready(function() {
  $('#searchButton').click(function() {
    event.preventDefault();
    
    var gitName = $("#searchGit").val();
    $('#searchGit').val("");
    $.get('https://api.github.com/users/'+ gitName +'?access_token=' + apiKey).then(function(response){
      // console.log(response);
      $('.showGitName').text("Repositories for" +response.owner.login);
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
      $('.showGitName').text(error.message);
    });
  });
});

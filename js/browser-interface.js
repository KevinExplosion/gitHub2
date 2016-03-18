var apiKey = require('./../.env').apiKey;
var gitName;

$(document).ready(function() {
  $('#searchGit').click(function() {
    var gitName = $("#searchGit").val();
    $('#searchGit').val("");
    $.get('https://api.github.com/users/kevinExplosion?access_token=' + apiKey).then(function(response){
      console.log(response);
      $('showGitName').text("Repositories for" + response.main.name);
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});

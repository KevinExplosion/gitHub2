var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#searchGit').click(function() {
    var gitName = $("#searchGit").val();
    $('#searchGit').val("");
    $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});

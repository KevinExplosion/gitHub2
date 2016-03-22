var apiKey = require('./../.env').apiKey;


exports.displayGit = function(){
  $.get('https://api.github.com/users/'+gitName+'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for (i=0, i<response.length, i++) {
      $('#showGitName').html("<li>Repository: "+response[i].name+ "</li>");
      $('#showGitRepo').html("<li>Description: "+response[i].description+ "</li>");
    }
  }).fail(function(error){
      $('#showGitName').html(error.message);
  });
};

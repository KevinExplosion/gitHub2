var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  $.get('https://api.github.com/users/'+username+'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for (i=0, i<response.length, i++) {
      $('#showGitName').html("<li>Repository: "+response[i].name+ "</li>");
      $('#showGitName').html("<li>Description: "+response[i].description+ "</li>");
    }
  }).fail(function(error){

    console.log(error.responseJSON.message);
  });
};

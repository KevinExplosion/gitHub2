var apiKey = require('./../.env').apiKey;
var displayGit = require('./../js/gitHub.js').displayGit;


$(document).ready(function() {
  $('#searchButton').click(function() {
    debugger;
    console.log(response);
    event.preventDefault();

    var gitName = $('#searchGit').val();
    displayGit(gitName);
  });
});

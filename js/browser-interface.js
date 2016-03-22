var apiKey = require('./../.env').apiKey;
var displayGit = require('./../js/gitHub.js').displayGit;


$(document).ready(function() {
  $('#searchButton').click(function() {
    console.log(response);
    debugger;
    event.preventDefault();

    gitName = $('#searchGit').val();
    $('#gitName').val("");
    displayGit();
  });
});

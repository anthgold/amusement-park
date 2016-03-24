$(document).ready(function() {
    var height = parseInt(prompt("How tall are you in inches?"));

  if (height < 48) {
    $('#too-short-rides').show();
  } else if (height > 70) {
    $('#too-tall-rides').show();
  } else {
    $('#all-rides').show();
  }
event.preventDefault();
});

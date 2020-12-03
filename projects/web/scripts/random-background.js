//orig gonna do random background, plans changed, filenames didn't
function changeBackground(ticker) {
  var page = document.getElementById('page');
  if (ticker % 2 == 0) {
    page.style.backgroundImage = "linear-gradient(to top left, #A0C8FE, #2661AD)";
  }
  else {
    page.style.backgroundImage = "linear-gradient(to top left, #2661AD, #A0C8FE)";

  }
  i += 1;
}
  var i = 0;
  var myButton = document.getElementById("change-background");
  myButton.addEventListener('click', function() {changeBackground(i);});

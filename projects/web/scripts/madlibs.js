function getWords() {
  var adjective = document.getElementById('ADJECTIVE').value;
  var name = document.getElementById('NAME').value;
  var verb = document.getElementById('VERB').value;
  var place = document.getElementById('PLACE').value;
  var noun = document.getElementById('NOUN').value;

  var story = document.getElementById("story");

  story.innerHTML = "There was a " + adjective + " person named " + name + ". They liked to " + verb + " in " + place + " until they got hit by a  " + noun;
}

var magicButton = document.getElementById('magic-button');

magicButton.addEventListener('click', getWords)

//story time:
//there was a ADJECTIVE person named NAME,
//he liked to VERB in the PLACE
//until he was killed by NOUN

//sorry im very tired, creative juices r drained

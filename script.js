//Moves Texas image to right on click
let texas = document.getElementById('texas');
let behind = document.getElementById('behind');

texas.addEventListener('click', function() {
    texas.classList.add('animate');
    behind.classList.remove('d-none');
});

//Moves veto image to left on click
let veto = document.getElementById('veto');
let behindVeto = document.getElementById('behindVeto');

veto.addEventListener('click', function () {
  veto.classList.add('animate-veto');
  behindVeto.classList.remove('d-none');
});


//Quote Generator//
const quotes = [
  "John Tyler: 'I can never consent to being dictated to.'",
  "'Popularity, I have always thought, may aptly be compared to a coquette—the more you woo her, the more apt is she to elude your embrace.' - John Tyler",
  "'A politician can do nothing without the people.'",
  "'I am the President, and I shall be responsible for my administration.'",
  "'Wealth can only be accumulated by the earnings of industry and the savings of frugality.'",
  "'The Constitution was made to guard the people against the dangers of good intentions.'",
  "'Govern wisely, and as little as possible.'",
  "'The separation of church and state should be absolute.'",
  "'Liberty and Union, now and forever, one and inseparable.'",
  "'The best government is that which governs least.'"
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[randomIndex];
}

//Quiz//
function checkAnswers() {
  const answer1 = document.getElementById('question1').value.toLowerCase();
  const answer2 = document.getElementById('question2').value.toLowerCase();
  let result = "";
  
  if (answer1.includes("none")) {
      result += "Correct! John Tyler had no Vice President.\n";
  } else {
      result += "Incorrect: John Tyler did not have a Vice President.\n";
  }
  
  if (answer2.includes("texas")) {
      result += "Correct! Texas was annexed during Tyler's presidency.";
  } else {
      result += "Incorrect: Texas was the state annexed during Tyler's presidency.";
  }
  
  document.getElementById('quiz-result').innerText = result;
}
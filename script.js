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

//After Presidency Arrow//

let arrow = document.getElementById('arrow2');

arrow.addEventListener('click', function () {
    arrow.classList.add('Whoosh-Right');
  });
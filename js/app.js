'use strict';

let allCards = [];
let indexCollection = [];

let imageOne = document.getElementById('image-one');
let imageTwo = document.getElementById('image-two');

function Cards(name, value, fileExtension = 'png'){
  this.name = name;
  this.value = value;
  this.src = `img/${name}.${fileExtension}`;
  allCards.push(this);
  // console.log(allCards);
}

new Cards('ace-hearts', 11);
new Cards('king-hearts', 10);
new Cards('queen-hearts', 10);
new Cards('jack-hearts', 10);
new Cards('ten-hearts', 10);
new Cards('nine-hearts', 9);
new Cards('eight-hearts', 8);
new Cards('seven-hearts', 7);
new Cards('six-hearts', 6);
new Cards('five-hearts', 5);
new Cards('four-hearts', 4);
new Cards('three-hearts', 3);
new Cards('two-hearts', 2);



function getRandomCard() {
  return Math.floor(Math.random() * allCards.length);
}
// console.log(getRandomCard);


function renderCards() {



  let cardOne = getRandomCard();
  let cardTwo = getRandomCard();
  console.log(cardTwo);

  imageOne= 'img/king-hearts.png';
  // imageOne.name = allCards[cardOne].name;

  imageTwo.src = allCards[cardTwo].src;
  imageTwo.alt = allCards[cardTwo].name;
}
renderCards();

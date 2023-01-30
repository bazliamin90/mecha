const rollDice = document.getElementById('roll-dice');
const diceResult = document.getElementById('dice-result');
const diceMessage = document.getElementById('dice-message');

rollDice.addEventListener('click', function() {
  const randomNum = Math.floor(Math.random() * 6) + 1;

  diceResult.innerHTML = `<img src="dice${randomNum}.svg" />`;

  switch (randomNum) {
    case 1:
      diceMessage.innerHTML = 'Pemain buka <b>kad kuasa</b>, dan baca kelebihan kuasa<br>yang akan diberikan kepada kad pemain.<br>Kemudian kad kuasa itu diletakkan ke bahagian paling bawah';
      break;
    case 2:
      diceMessage.innerHTML = 'Nilai <b>ATK</b> kad pemain, tolak nilai <b>HP</b> kad lawan';
      break;
    case 3:
      diceMessage.innerHTML = 'Baca <b>efek</b> di bahagian bawah kad pemain';
      break;
    case 4:
      diceMessage.innerHTML = 'Pemain buka <b>kad kuasa</b>, dan baca kelebihan kuasa<br>yang akan diberikan kepada kad pemain.<br>Kemudian kad kuasa itu diletakkan ke bahagian paling bawah';
      break;
    case 5:
      diceMessage.innerHTML = 'Nilai <b>ATK</b> kad pemain, tolak nilai <b>HP</b> kad lawan';
      break;
    case 6:
      diceMessage.innerHTML = 'Baca <b>efek</b> di bahagian bawah kad pemain';
      break;
  }
});

//function to pick the mystery card, and store it.
//there will be a countdown timer starting at ~2:30
//There will be limited amount of moves
//A display of 9 cards(the user's lineup), would like the options to have a pull from a higher amount./
//the lineup will start faceup, it is just a tool for the user to hide cards to narrowdown, line item will be an object with   keys(= that will be characteristics) and values(= that will be the value of the key.)

//lineUp:
//    Will consist of 9 images in a 3 x 3 grid(basic: set images in set places, only 9 images), css, flexbox
//    it is a visual tool for the user to use to narrowdown their guess,
//    will start face up.
//    they will be clickable to hide, and display. only.  (JavaScript, onclick)
//    the mystery card will be equal to one of the lineup card (JavaScript)
//    lineup items will be an object with keys(= that will be characteristics) and values(= that will be the value of the key.)
//        ADVANCE:
//          randomly layout in the grid
//          a bigger pool of choices.
//          larger grid

//timer:
//    timer will start at the start of the game
//    timer will display
//    countdown from ~2:30
//    when time reaches 0, player loses

//moves:
//    there will be a limited number of moves,
//    it will be diplayed
//    it will count down to 0, player loses if they haven't guess correctly.

//questions:
//will consist of two dropdowns.
//first dropdown is equivalent to the key options,
//second dropdown is equivalent to the values of the overall key values.
//will have a submit button
//will return a "yes" or "no", as a function will look for true or false(create a function to compare the value submited to the corresponding value of the mystery card)
//        ADVANCE:
//          will diplay the question asked and the answer


const charactersInPlay = [
  {name: 'Picard', hairstyle: 'bald' ,  rank: 'Captain', gender: 'male', species: 'Human', affiliation: 'Federation', skintone: 'lighter', image: './images/picard.png'},
  {name: 'Janeway', hairstyle: 'medium' , rank: 'Captain', gender: 'female', species: 'Human', affiliation: 'Federation', skintone: 'lighter', image: './images/janeway.png'},
  {name: 'Spock', hairstyle: 'short' , rank: 'Commander', gender: 'male', species: 'Vulcan', affiliation: 'Federation', skintone: 'lighter', image: './images/spock.png'},
  {name: 'Worf', hairstyle: 'long' , rank: 'Commander', gender: 'male', species: 'Klingon', affiliation: 'Federation', skintone: 'darker', image: './images/worf.png'},
  {name: 'T\'Pol', hairstyle: 'short' , rank: 'Commander', gender: 'female', species: 'Vulcan', affiliation: 'Federation', skintone: 'lighter', image: './images/tpol.png'},
  {name: 'Sisko', hairstyle: 'bald' , rank: 'Captain', gender: 'male', species: 'Human', affiliation: 'Federation', skintone: 'darker', image: './images/sisko.png'},
  {name: 'Kirk', hairstyle: 'short' , rank: 'Captain', gender: 'male', species: 'Human', affiliation: 'Federation', skintone: 'lighter', image: './images/kirk.png'},
  {name: 'Kasidy', hairstyle: 'pulled back' , rank: 'Civilian', gender: 'female', species: 'Human', affiliation: 'Federation', skintone: 'darker', image: './images/kasidy.png'},
  {name: 'Keiko', hairstyle: 'long' , rank: 'Civilian', gender: 'female', species: 'Human', affiliation: 'Federation', skintone: 'lighter', image: './images/keiko.png'},
  {name: 'B\'Etor', hairstyle: 'long' , rank: 'Captain', gender: 'female', species: 'Klingon', affiliation: 'Klingon Empire', skintone: 'darker', image: './images/betor.png'},
  {name: 'Sarek', hairstyle: 'short' , rank: 'Ambassador', gender: 'male', species: 'Vulcan', affiliation: 'Federation', skintone: 'lighter', image: './images/sarek.png'},
  {name: 'Torres', hairstyle: 'medium' , rank: 'Lieutanant', gender: 'female', species: 'Klingon', affiliation: 'Federation', skintone: 'darker', image: './images/torres.png'},
  {name: 'Quark', hairstyle: 'bald' , rank: 'Civilian', gender: 'male', species: 'Ferengi', affiliation: 'Ferengi Alliance', skintone: 'darker', image: './images/quark.png'},
  {name: 'Nog', hairstyle: 'bald' , rank: 'Cadet', gender: 'male', species: 'Ferengi', affiliation: 'Federation', skintone: 'darker', image: './images/nog.png'},
  {name: 'Chang', hairstyle: 'bald' , rank: 'General', gender: 'male', species: 'Klingon', affiliation: 'Klingon Empire', skintone: 'darker', image: './images/chang.png'},
  {name: 'Dukat', hairstyle: 'short' , rank: 'Gul', gender: 'male', species: 'Cardassian', affiliation: 'Cardassian Union', skintone: 'purple', image: './images/dukat.png'},
  {name: 'Garak', hairstyle: 'short' , rank: 'Civilian', gender: 'male', species: 'Cardassian', affiliation: 'Cardassian Union', skintone: 'purple', image: './images/garak.png'},
  {name: 'Burnham', hairstyle: 'short' , rank: 'Commander', gender: 'female', species: 'Human', affiliation: 'Federation', skintone: 'darker', image: './images/burnham.png'},
  {name: 'Seska', hairstyle: 'long' , rank: 'Operative', gender: 'female', species: 'Cardassian', affiliation: 'Cardassian Union', skintone: 'darker', image: './images/seska.png'},
  {name: 'Troi', hairstyle: 'pulled back' , rank: 'Ambassador', gender: 'female', species: 'Betazoid', affiliation: 'Federation', skintone: 'lighter', image: './images/ltroi.png'},
  {name: 'Ilia', hairstyle: 'bald' , rank: 'Lieutanant', gender: 'female', species: 'Deltan', affiliation: 'Federation', skintone: 'lighter', image: './images/ilia.png'},
  {name: 'Kira', hairstyle: 'short' , rank: 'Major', gender: 'female', species: 'Bajoran', affiliation: 'Bajoran Militia', skintone: 'lighter', image: './images/kira.png'},
  {name: 'Tuvok', hairstyle: 'short', rank: 'Lieutanant', gender: 'male', species: 'Vulcan', affiliation: 'Federation', skintone: 'darker', image: './images/tuvok.png'}];

let mysteryCard = '';


$(() => {
  let moves = null;
  let timer2 = '';
  let qAnswer = '';
  let value = '';
  let interval = null;
  let secondValue = '';
  let guessValue = false;
  let characterNames = null;
  let $characterImages = null;
  let i = null;

  const $easyGame = $('.easy');
  const $mediumGame = $('.medium');
  const $hardGame = $('.hard');
  const $card = $('.card');
  const $countDownBar = $('.countdown-bar');
  const $questionDisplayArea = $('.question-display-area');
  const $firstOption = $('.characteristics');
  const $secondOption = $('.characteristic-values');
  const $secondValue = $('.secondValue');
  const $submitQuestion = $('.question-submit');
  const $guess = $('.qWho');
  const $QImage = '<img src="./images/Judge_Q_Head.png">';
  const $instructions = $('.instructions');
  const $gameActive = $('.gameActive');
  const $characterList = $('.characterList');
  const $audio = new Audio('./audio/oneturnleft.wav');
  const $buttonSound = new Audio('./audio/button.mp3');
  const $hideSound = new Audio('./audio/cardhide.mp3');
  const $startGame = new Audio('./audio/startgame.mp3');
  const $guessSound = new Audio('./audio/guesssound.mp3');




  const $characterInPlay = charactersInPlay.map(function(a) {
    return a;
  });

  let twelveCharacters = [];

  arrayShuffle();

  function arrayShuffle() {
    let random = 0;
    let temp = 0;
    for (let i = 1; i < $characterInPlay.length; i++) {
      random = Math.round(Math.random() * i);
      temp = $characterInPlay[i];
      $characterInPlay[i] = $characterInPlay[random];
      $characterInPlay[random] = temp;
    }
    $characterInPlay.splice(12, (charactersInPlay.length - 12));
    twelveCharacters = $characterInPlay;
    characterNames = twelveCharacters.map(function(a) {
      return a.name;
    }).sort();
    $characterImages = twelveCharacters.map(function(a) {
      return a.image;
    });
    mysteryCard = twelveCharacters[Math.floor(Math.random() * 12)];

    shuffle();
  }

  function shuffle() {
    let random = 0;
    let temp = 0;
    for (let i = 1; i < $characterImages.length; i++) {
      random = Math.round(Math.random() * i);
      temp = $characterImages[i];
      $characterImages[i] = $characterImages[random];
      $characterImages[random] = temp;
    }
    imageInsert($characterImages);
  }

  function imageInsert($characterImages) {
    for (let i = 0;i < $characterImages.length; i++) {
      $card.append(`<li><img src="${$characterImages[i]}" value="${i}"></li>`);
    }
  }

  function $secondQuestion(value) {
    const attributeList = twelveCharacters.map(function(a) {
      return a[value];
    });
    let filteredAttributes = [...new Set(attributeList)];
    filteredAttributes=filteredAttributes.sort();
    $insertAttributes(filteredAttributes);
  }

  function $insertAttributes(filteredAttributes) {
    $('.characteristic-values option').remove();
    $secondOption.append('<option selected disabled>and attribute</option>');
    $secondValue.html('');
    for (let i = 0;i < filteredAttributes.length; i++) {
      $secondOption.append(`<option>${filteredAttributes[i]}</option>`);
    }
  }

  //make a list of all drop down names
  function allNames(){
    $characterList.append('<option selected disabled>crew member</option>');

    for (let i = 0;i < characterNames.length; i++) {
      $characterList.append(`<option>${characterNames[i]}</option>`);
    }
  }

  allNames();

  //Clock Countdown
  function startCountDown(){
    interval = setInterval(function() {
      const timer = timer2.split(':');
      let minutes = parseInt(timer[0], 10);
      let seconds = parseInt(timer[1], 10);
      --seconds;
      minutes = (seconds < 0) ? --minutes : minutes;
      if (minutes === 0 && seconds === 0) {
        $guessSound.play();
        clearInterval(interval);
        $gameActive.fadeOut(3000);
        $('.mystery-character').removeClass('infinite pulse');
        transitionDelay();
        setTimeout(youLose, 3000);
      }
      seconds = (seconds < 0) ? 59 : seconds;
      seconds = (seconds < 10) ? '0' + seconds : seconds;
      // minutes = (minutes < 10) ?  minutes : minutes;
      $('.time').html(`${minutes} minutes : ${seconds} seconds`);
      timer2 = minutes + ':' + seconds;
    }, 1000);

  }

  // Select question options
  $firstOption.on('change', (e) => {
    $buttonSound.play();
    const option = $(e.target).find('option:selected');
    value = $(option).attr('value');
    $secondQuestion(value);
    $('.value').html(`${value} `);
  });

  $secondOption.on('change', (e) => {
    $buttonSound.play();
    const option = $(e.target).find('option:selected');
    secondValue = $(option).text();
    $secondValue.html(secondValue);
  });

  // Submit question & Move Countdown
  $submitQuestion.on('click', () => {
    if (value && secondValue) {
      $buttonSound.play();
      moves--;
      checkQuestion();
      if (moves === 0) {
        $gameActive.fadeOut();
        $('.mystery-character').removeClass('infinite pulse');
        transitionDelay();
        setTimeout(youLose, 3000);
      } else {
        $('.questions-left').html(`${moves}`);
        $questionDisplayArea.append(`<p>Is the crew member's ${value} ${secondValue}?  ${qAnswer}</p>`);
        if (moves === 1){
          $audio.play();
        }
      }
      $firstOption[0].selectedIndex = 0;
      $secondOption[0].selectedIndex = 0;
      value = '';
      secondValue = '';
    }
  });


  // Check question
  function checkQuestion() {
    if (mysteryCard[value] === secondValue) {
      qAnswer = 'YES';
    } else qAnswer = 'NO';
  }


  // Check guess
  function checkGuess() {
    if(mysteryCard.name === guessValue) {
      youWin();
    } else youLose();
  }

  $characterList.on('change', (e) => {
    $buttonSound.play();
    const qOption = $(e.target).find('option:selected');
    guessValue = $(qOption).text();
    $secondValue.html(secondValue);
  });

  $guess.on('click', () => {
    if (guessValue) {
      $guessSound.play();
      $('.mystery-character').removeClass('infinite pulse');
      clearInterval(interval);
      $gameActive.fadeOut(3000);
      transitionDelay();
      setTimeout(checkGuess,3000);
    }
  });

  function transitionDelay(){
    $('.sitename').css({'-webkit-animation': 'adjustText 3s',
      '-moz-animation': 'adjustText 3s',
      '-o-animation': 'adjustText 3s',
      'animation': 'adjustText 3s'  });
  }

  // When you lose
  function youLose() {
    clearInterval(interval);
    $('h1').css({'font-size': '50px'});
    $('.mystery-character').removeClass('infinite pulse').addClass('shake');
    $('.mystery-character').html(`<img src="${mysteryCard.image}" alt="Mystery Character">`);
    $countDownBar.css({'flex-direction': 'row', 'align-items': 'center'});
    $countDownBar.html(`${$QImage}`);
    $questionDisplayArea.css({'flex-direction': 'column', 'align-items': 'center', 'justify-content': 'center'});
    $('.question-display-area p').css({'font-size': '25px', 'margin': '25px auto'});
    $questionDisplayArea.addClass('animated fadeIn');
    $questionDisplayArea.html(`<h2>What a shame!</h2><p>YOU have lost ${mysteryCard.name} to the continuum.</p><button class="restart buttonHover">Play Again?</button>`).fadeIn(1000);
  }

  // You win
  function youWin() {
    clearInterval(interval);
    $('h1').css({'font-size': '50px'});
    $('.mystery-character').removeClass('infinite pulse').addClass('fadeIn');
    $('.mystery-character').html(`<img src="${mysteryCard.image}" alt="Mystery Character">`);
    $countDownBar.css({'flex-direction': 'row', 'align-items': 'center'});
    $countDownBar.html(`${$QImage}`);
    $questionDisplayArea.css({'flex-direction': 'column', 'align-items': 'center', 'justify-content': 'center'});
    $questionDisplayArea.addClass('animated zoomIn');
    $questionDisplayArea.html(`<h2>Luck, and some good deductive skill, are on your side!</h2><p>YOU have saved ${mysteryCard.name} from an eternal existance with me.</p><button class="restart buttonHover">Play Again?</button>`).fadeIn(1000);
  }

  function playGame() {
    $('.questions-left').html(`${moves}`);
    $instructions.hide();
    $gameActive.fadeIn();
    $countDownBar.css({'display': 'flex'});
    $('.guessSubmit').css({'display': 'flex'});
    $('.QImage').hide();
  }


  //Hide Card
  function hideCard(e) {
    $hideSound.play();
    i = $(e.target).attr('value');
    if ($(e.target).attr('src') === 'images/cardback.png')  {
      $(e.target).attr('src', `${$characterImages[i]}`);
    }else {
      $(e.target).attr('src', 'images/cardback.png');
    }
  }

  $card.on('click', hideCard);


  //start buttons
  $easyGame.on('click', () => {
    $startGame.play();
    moves = 6;
    timer2 = '02:01';
    $('.mystery-character').addClass('pulse');
    startCountDown();
    playGame();
  });

  $mediumGame.on('click', () => {
    $startGame.play();
    moves = 5;
    timer2 = '01:31';
    $('.mystery-character').addClass('pulse');
    startCountDown();
    playGame();
  });

  $hardGame.on('click', () => {
    $startGame.play();
    moves = 4;
    timer2 = '01:01';
    $('.mystery-character').addClass('pulse');
    startCountDown();
    playGame();
  });

  // Restart
  $questionDisplayArea.on('click', '.restart', () => {
    location.reload();
  });

  $(document).ready(function(){
    $('body').css('display', 'none');
    $('body').fadeIn(1500);
  });


});

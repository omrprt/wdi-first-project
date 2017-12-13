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

const characters = [
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
  {name: 'Torres', hairstyle: 'medium' , rank: 'Lieutanant', gender: 'female', species: 'Klingon', affiliation: 'Federation', skintone: 'darker', image: './images/torres.png'}];

  $(() => {
    let moves = 6;
    let timer2 = '01:31';
    let qAnswer = '';
    let value = '';
    let interval = null;
    let secondValue = '';
    let guessValue = '';
    let $questionText = '';
    let $secondValue = $('.secondValue');

    const $hideCard = $('.card');
    const $countDownBar = $('.countdown-bar');
    const $playGame = $('.playGame');
    const $firstOption = $('.characteristics');
    const $secondOption = $('.characteristic-values');
    const $submitQuestion = $('.question-submit');
    const $guess = $('.qWho');
    const $QImage = '<img src="./images/Judge_Q_Head.png">';
    const $instructions = $('.instructions');
    const $gameActive = $('.gameActive');
    const characterNames = characters.map(function(a) {
      return a.name;
    }).sort();
    const characterImages = characters.map(function(a) {
      return a.image;
    });
    const mysteryCard = characters[Math.floor(Math.random() * 12)];

    // // Randomly place the cards
    // function shuffle(array) {
    //   let currentIndex = array.length, temporaryValue, randomIndex;
    //
    //   // While there remain elements to shuffle...
    //   while (0 !== currentIndex) {
    //
    //     // Pick a remaining element...
    //     randomIndex = Math.floor(Math.random() * currentIndex);
    //     currentIndex -= 1;
    //
    //     // And swap it with the current element.
    //     temporaryValue = array[currentIndex];
    //     array[currentIndex] = array[randomIndex];
    //     array[randomIndex] = temporaryValue;
    //   }
    //   imageInsert(array);
    //   console.log(array);
    // }
    //
    // shuffle(characterImages);
    //
    // function imageInsert(array) {
    //   console.log('inside Image insert');
    //   for (let i = 0;i < array.length; i++) {
    //     $('.card').append(`<li><img src="${array[i]}</option></li>`);
    //   }
    // }

    function $secondQuestion(value) {
      let attributeList = characters.map(function(a) {
        return a[value];
      });
      let filteredAttributes = [...new Set(attributeList)];
      filteredAttributes=filteredAttributes.sort();
      $insertAttributes(filteredAttributes);
    }

    function $insertAttributes(filteredAttributes) {
      $('.characteristic-values option').remove();
      $('.characteristic-values').append('<option selected disabled>and attribute</option>');
      $secondValue.html('');
      console.log('filteredAttributes', filteredAttributes);
      for (let i = 0;i < filteredAttributes.length; i++) {
        $('.characteristic-values').append(`<option>${filteredAttributes[i]}</option>`);
      }
    }

    //make a list of all drop down names
    function allNames(){
      $('.characterList').append('<option selected disabled>crew member</option>');
      console.log('inside Allnames', characterNames);
      for (let i = 0;i < characterNames.length; i++) {
        $('.characterList').append(`<option>${characterNames[i]}</option>`);
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
        console.log('intime');
        minutes = (seconds < 0) ? --minutes : minutes;
        if (minutes < 0) {
          youLose();
        }
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        // minutes = (minutes < 10) ?  minutes : minutes;
        $('.time').html(`${minutes} minutes : ${seconds} seconds`);
        timer2 = minutes + ':' + seconds;
      }, 1000);

    }

    $firstOption.on('change', (e) => {
      const option = $(e.target).find('option:selected');
      value = $(option).attr('value');
      $secondQuestion(value);
      console.log(value);
      $('.value').html(`${value} `);
    });

    $secondOption.on('change', (e) => {
      const option = $(e.target).find('option:selected');
      secondValue = $(option).text();
      console.log(secondValue);
      $secondValue.html(secondValue);
    });

    // Move Countdown
    $submitQuestion.on('click', () => {
      const questionAsked = $('.question').text();
      moves--;
      console.log(moves);
      checkQuestion();
      if (moves === 0) {
        youLose();
      } else {
        $('.questions-left').html(`${moves}`);
        $('.question-display-area').append(`<p>Is the crew member's ${value} ${secondValue}?  ${qAnswer}</p>`);
      }
    });

    // When you lose
    function youLose() {
      clearInterval(interval);
      $('.mystery-character').html(`<img src="${mysteryCard.image}" alt="Mystery Character">`);
      $countDownBar.css({'flex-direction': 'row', 'align-items': 'center'});
      $countDownBar.html(`${$QImage}`);
      $('.question-display-area').css({'flex-direction': 'column', 'align-items': 'center'});
      $('.question-display-area p').css({'font-size': '25px', 'margin': '25px auto'});
      $('.question-display-area').html(`<h2>What a shame!</h2><p>YOU have lost ${mysteryCard.name} to the continuum.</p><button class="restart">Restart</button>`);
    }

    // Check question
    function checkQuestion() {
      console.log('in checkQuestion');
      console.log(mysteryCard[value], secondValue);
      console.log($questionText);
      if (mysteryCard[value] === secondValue) {
        qAnswer = 'YES';
        console.log(qAnswer);
      } else qAnswer = 'NO';
    }

    // Restart
    $('.question-display-area').on('click', '.restart', () => {
      console.log('restart');
      location.reload();
    });

    // Check guess
    function checkGuess(e) {
      console.log('in checkguess');
      console.log(e);
      if(mysteryCard.name === e) {
        console.log('you win');
        youWin();
      } else youLose();
    }

    $guess.on('click', () => {
      const qOption = $('.characterList').find('option:selected');
      guessValue = $(qOption).text();
      console.log(guessValue);
      checkGuess(guessValue);
    });

    // You win
    function youWin() {
      clearInterval(interval);
      $('.mystery-character').html(`<img src="${mysteryCard.image}" alt="Mystery Character">`);
      $countDownBar.css({'flex-direction': 'row', 'align-items': 'center'});
    $countDownBar.html(`${$QImage}`);
      $('.question-display-area').css({'flex-direction': 'column', 'align-items': 'center'});
      $('.question-display-area').html(`<h2>Luck is on your side!</h2><p>YOU have saved ${mysteryCard.name} from an eternal existance with me.</p><button class="restart">Restart</button>`);
    }

    function playGame() {
      console.log('inside playgame');
      $instructions.hide();
      $gameActive.show();
      $countDownBar.css({'display': 'flex'});
      $('.guessSubmit').css({'display': 'flex'});
      $('.QImage').hide();
    }

    function hideCard(e) {
      console.log('in hidecard');
      $(e.target).attr('src', 'images/cardback.jpg');
    }

    $hideCard.on('click', hideCard);

    //game start button
    $playGame.on('click', () => {
      startCountDown();
      playGame();
    });

  });

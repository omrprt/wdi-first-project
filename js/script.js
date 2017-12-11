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

$(() => {

  const characters = [
    {name: 'Picard', rank: 'Captain', gender: 'Male', species: 'Human', affiliation: 'Federation', image: './images/picard.png'},
    {name: 'Janeway', rank: 'Captain', gender: 'Female', species: 'Human', affiliation: 'Federation', image: './images/janeway.png'},
    {name: 'Spock', rank: 'Captain', gender: 'Male', species: 'Vulcan', affiliation: 'Federation', image: './images/spock.png'}
  ];



  // let $characteristicChosen = .characteristics.value



  let result = characters.map(function(a) {
    return a.name;
  });

  console.log(result);

  // var reformattedArray = kvArray.map(function(obj) {
  //    var rObj = {};
  //    rObj[obj.key] = obj.value;
  //    return rObj;
  // });

  //Count Down Clock
  let timer2 = '00:05';
  const $youLoseImage = '<img src="./images/Judge_Q_Head.png">';

  const interval = setInterval(function() {
    const timer = timer2.split(':');
    let minutes = parseInt(timer[0], 10);
    let seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = (seconds < 0) ? --minutes : minutes;
    if (minutes < 0) {
      clearInterval(interval);
      $('.countdown-bar').css({'flex-direction': 'row', 'align-items': 'center'});
      $('.countdown-bar').html(`What a shame! YOU have lost one of you crew members to the continuum. ${$youLoseImage}`);
    }
    seconds = (seconds < 0) ? 59 : seconds;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    // minutes = (minutes < 10) ?  minutes : minutes;
    $('.time').html(`${minutes} minutes : ${seconds} seconds`);
    timer2 = minutes + ':' + seconds;
  }, 1000);

});
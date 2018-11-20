var scores, roundScore, activePlayer;
scores = [0,0];
activePlayer = 0;
roundScore = 0;

// Hide the dice 
document.querySelector('.dice').style.display = 'none';

//Updating initial scores to 0
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

//Adding an Event Listner and an anonymous function that doesn't have name and cannot be used further anywhere.
document.querySelector('.btn-roll').addEventListener('click', function() {
  
  // 1. Make a random number.
  var dice = Math.floor(Math.random() * 6) + 1;
  
  //2. Display the result.
  var diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice + '.png';
 
  //3. Update the dice score if the number was not one.
  if(dice!==1){
    roundScore = roundScore + dice;
    document.getElementById('current-' + activePlayer ).textContent = roundScore;

  }
  else{
    nextPlayer();
  }
 
})


// Implementing Hold Button.
document.querySelector('.btn-hold').addEventListener('click' , function(){

  // Update the Score.
     scores[activePlayer] = roundScore + scores[activePlayer];
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
      document.getElementById('current-' + activePlayer ).textContent = 0;

  
  // Chnage the turn 
  nextPlayer();

})

function nextPlayer(){
  
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0 ; 
  
    document.getElementById('cuurent-0').textContent = '0';
    document.getElementById('current-1').textContent = '1';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';


}
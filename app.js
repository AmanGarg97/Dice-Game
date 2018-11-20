var scores, roundScore, activePlayer , gamePlaying;
init();




//Adding an Event Listner and an anonymous function that doesn't have name and cannot be used further anywhere.
document.querySelector('.btn-roll').addEventListener('click', function() {
  
  if(gamePlaying)
    {
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
  else if(dice == 1){
 
//    roundScore = 0 ; 
//    if(activePlayer == 1)
//      {
//        activePlayer = 0;
//      }
//    else{
//      activePlayer = 1;
//    }
//    
//    // Toggle the screen 
//    
//    document.querySelector('.player-0-panel').classList.toggle('active');
//    document.querySelector('.player-1-panel').classList.toggle('active');

    nextPlayer();
    
  }
      
    }
  
 
})


// Implementing Hold Button.
document.querySelector('.btn-hold').addEventListener('click' , function(){
  if(gamePlaying)
    {
      // Update the Score.
     scores[activePlayer] = roundScore + scores[activePlayer];
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
 // Check if player won
  
  if(scores[activePlayer] >= 10)
    {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;


    }
  
  else{
     // Chnage the turn 
  nextPlayer();
  }
    }

  

  
 
  
 
})

document.querySelector('.btn-new').addEventListener('click' , init )

function nextPlayer(){
  
//  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
   roundScore = 0 ; 
    if(activePlayer == 1)
      {
        activePlayer = 0;
      }
    else{
      activePlayer = 1;
    }
    
    // Toggle the screen 
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

}

function init(){
  scores = [0,0];
activePlayer = 0;
roundScore = 0;
  gamePlaying = true;
  
  // Hide the dice 
document.querySelector('.dice').style.display = 'none';

//Updating initial scores to 0
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('name-0').textContent = 'Player 1';  
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');  
  
  
  
  
}
$(function() {  
    // Inicializamos las variables a utilizar
    var $score = $('.score');
    var $playButton = $('.play');
    var $rockCard = $('.card.rock');
    var $paperCard = $('.card.paper');
    var $scissorsCard = $('.card.scissors');
   
    var currentCardSelected;
    
    /* Resto de métodos */
    	
    var socket = io();
    socket.emit('user connected');
 
    socket.on('get score', (score) => {
        $score.text(`Player 1 - ${score[0]} vs ${score[1]} - Player 2`)
    })

    $rockCard.click(() => {
        currentCardSelected = "Rock";    
    });
       
    $paperCard.click(() => {
        currentCardSelected = "Paper";        
    });
       
    $scissorsCard.click(() => {
        currentCardSelected = "Scissors";        
    });
       
    $playButton.click(() => {
        socket.emit("play card", currentCardSelected);
    })
});
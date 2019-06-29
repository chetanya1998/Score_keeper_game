var p1Button =document.querySelector("#p1");
var p2Button =document.querySelector("#p2");
var resetButton =  document.getElementById("reset");
var p1Display =document.querySelector("#p1Display");
var p2Display =document.querySelector("#p2Display");
var h1 = document.querySelector("h1");
var numInput =document.querySelector("input");
var p =document.querySelector("p");
var winningScoreDisplay =document.querySelector("p span")

var p1Score = 0;
var p2Score = 0;
var gameOver= false;
var winningScore = 5;



p1Button.addEventListener("click",function(){
	if(!gameOver){

    p1Score++;
    console.log(p1Score,winningScore);
    if(p1Score === winningScore)
    {p1Display.classList.add("winner");
	gameOver = true;

	}
	
	p1Display.textContent = p1Score;
}
});
p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			gameOver = true;
		}
		

      p2Display.textContent = p2Score;
	}
	

});
 resetButton.addEventListener("click",function(){
 	
 });
 function reset(){
 	p1score =0;
 	p2score =0;
 	p1Display.textContent = 0;
 	p2Display.textContent = 0;
 	p1Display.classList.remove("winner");
 	p2Display.classList.remove("winner");
 	gameOver = false;
 }

numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent = this.value;
	winningScore =Number(this.value) ;
	reset();
});
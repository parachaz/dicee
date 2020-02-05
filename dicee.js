const dices = document.querySelectorAll("img");
const dice1 = dices[0];
const dice2 = dices[1];
const heading = document.querySelector("h1");

var dice1Img = document.querySelector("dice1");

var random = ()=>{
  return (Math.floor(Math.random()*6))+1;
}



function handleClick(){
  var r1 = random();
  var r2 = random();
  dice1.setAttribute("src","images/dice"+r1+".png");
  dice2.setAttribute("src","images/dice"+r2+".png");
  if(r1>r2){
    heading.innerText = "🚩Player 1 Won! 🏎";
  }else if(r2>r1){
    heading.innerText="Player 2 Won! 🏆"
  }else{
    heading.innerText="Draw 😌";
  }

}
heading.addEventListener('click',handleClick);

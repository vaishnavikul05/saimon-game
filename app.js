let gameSeq=[];
let userSeq=[];
let highestScore=0;

h3=document.querySelector("h3");
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}

function levelUp(){
    userSeq=[];
   level++;
   
   h2.innerText=`level ${level}`;
   
   let randIdx=Math.floor(Math.random()*3);
   let randColor=btns[randIdx];
   let randbtn=document.querySelector(`.${randColor}`);
  gameSeq.push(randColor)
  console.log(gameSeq)
   gameFlash(randbtn);
}


function checkAns(idx){
   
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! your score was <b>${level}</b>you can't beat the highest score<br>  Press any key to start`;
        
        if(level>highestScore){
            h2.innerHTML=`congrts you beat the highest score${highestScore}`;
           
            highestScore=level;
            h3.innerHTML=`highest score:${highestScore}`;
           
        }
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
    
}

let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress); 
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
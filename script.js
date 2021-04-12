score = 0;
cross = true;
audio = new Audio('music.mp3'); 
audiogo = new Audio('gameover.wav');
setTimeout(() => {
    audio.play();
    
},1000);
document.onkeydown = function(e){
    console.log("key code is : ",e.keyCode);
    if(e.keyCode==38){
        player = document.querySelector('.player');
            player.classList.add('animatePlayer');
            setTimeout(()=>{
                player.classList.remove('animatePlayer');
            },700);
        
    }
    if(e.keyCode==39){
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
        player.style.left = playerX + 112 +'px';
    }
    if(e.keyCode==37){
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
        player.style.left = (playerX - 112) +'px';

    }
}
setInterval(() => {
    player = document.querySelector('.player');
    // gameOver = document.querySelector('.gameOver');
    // obstacle = document.querySelector('.obstacle');
    // px = parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
    // py = parseInt(window.getComputedStyle(player,null).getPropertyValue('top'));

    // ox = parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
    // oy = parseInt(window.getComputedStyle(player,null).getPropertyValue('top'));

    // offsetX = Math.abs(px - ox);
    // offsetY = Math.abs(py - oy);
    // // console.log(offsetX,offsetY)
    // if(offsetX < 73 && offsetY < 53){
    //     gameOver.style.visibility = 'visible';
    //     obstacle.classList.remove('obstacleAni')
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 150 && offsetY < 52) {
        gameOver.innerHTML = "Game Over "
        // gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audio.pause();
        }, 1000);
    }
    // else if(cross){
    //     score+=1;
    //     updateScore(score);
    //     cross = false;
    //     setTimeout(()=>{
    //        cross = true;
    //     },1000);
    // }
    else if (offsetX < 145 && cross) {
        score += 1; 
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.4 ;
        obstacle.style.animationduration = newDur + "s";
        },500);
        
    }
}, 10);
function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score;
}
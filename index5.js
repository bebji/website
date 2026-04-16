var start_header = document.getElementById("startH")
var start_paragraph = document.getElementById("startP")
var character = document.getElementById("character")
var block = document.getElementById("block")
var block2 = document.getElementById("block2")
var game = document.getElementById("game")
var lost_text = document.getElementById("losttext")
lost_text.style.display = "none";
var retry = document.getElementById("retry")
retry.style.display = "none";
var lost = false
var started = false
var points = 0 
var pointsbox = document.getElementById("pointsbox")
var scored = false
var min = 1
var max = 4
var block2display = False
function roulette(percent) {
    return Math.random() * 100 < percent;
}
function jump(){
    if(!lost){
        if(!started){
            started = true
            start_paragraph.style.visibility = "hidden" 
            start_header.style.visibility = "hidden"
            block.style.animationPlayState = "running";
            block2.style.animationPlayState = "running";
            return
        }
        if(character.classList != "animate"){
            character.classList.add("animate");
            setTimeout(function(){
                character.classList.remove("animate")
        },500)
        }
    }
}
retry.addEventListener('click', () => {
    lost_text.style.display = "none";
    retry.style.display = "none";
    game.style.display = "block";
    block.style.animationPlayState = "paused";
    block2.style.animationPlayState = "paused";
    lost = false;
    started = false;
    points = 0;
    pointsbox.textContent = "0";
    scored = false;
});
var checkded = setInterval(function(){
    if (!started) return;   
    var characterRect = character.getBoundingClientRect();
    var blockRect = block.getBoundingClientRect();
    var block2Rect = block2.getBoundingClientRect();
    var speedchoice = Math.floor(Math.random() * (max - min + 1)) + min
    if (blockRect.left < 0 && !scored) {
        scored = true;
        points += 1;
        pointsbox.textContent = String(points);
        var newDuration;
        if(speedchoice === 1){
            newDuration = "2000ms";
        } else if(speedchoice === 2) {
            newDuration = "3000ms";
        } else if(speedchoice === 3){
            newDuration = "3500ms";
        } else {
            newDuration = "2800ms";
        }
        // restart animation with new duration
        if(block2display === true){
        block2.style.animation = "none";
        block2.offsetHeight; // force reflow
        block2.style.animation = `block2 ${newDuration} infinite linear`;
        block2.style.animationPlayState = "running"
        } else {
            block2.style.display = "none"
        }
        block.style.animation = "none";
        block.offsetHeight; // force reflow
        block.style.animation = `block ${newDuration} infinite linear`;
        block.style.animationPlayState = "running";
    }
        if (block2Rect.left < 0 && !scored) {
        scored = true;
        points += 1;
        pointsbox.textContent = String(points);
        if(speedchoice === 1){
            newDuration = "2000ms";
        } else if(speedchoice === 2) {
            newDuration = "3000ms";
        } else if(speedchoice === 3){
            newDuration = "3500ms";
        } else {
            newDuration = "2800ms";
        }
        // restart animation with new duration
        if(block2display === true){
        block2.style.animation = "none";
        block2.offsetHeight; // force reflow
        block2.style.animation = `block2 ${newDuration} infinite linear`;
        block2.style.animationPlayState = "running"
        } else {
            block2.style.display = "none"
        }
        block.style.animation = "none";
        block.offsetHeight; // force reflow
        block.style.animation = `block ${newDuration} infinite linear`;
        block.style.animationPlayState = "running";

        
    }
    if (blockRect.left > 100 || block2Rect.left > 100 ) {
        scored = false;
    }
        
    var overlap = !(characterRect.right < blockRect.left || 
                    characterRect.left > blockRect.right ||  
                    characterRect.bottom < blockRect.top ||
                    characterRect.top > blockRect.bottom);
    var overlap2 = !(characterRect.right < block2Rect.left ||                 
                     characterRect.left > block2Rect.right ||                     
                     characterRect.bottom < block2Rect.top ||                   
                     characterRect.top > block2Rect.bottom);                   
    if(overlap2){
        game.style.display = "none"
        lost_text.style.display = "block"
        lost = true
        retry.style.display = "block"
    }
    if(overlap){
        game.style.display = "none"
        lost_text.style.display = "block"
        lost = true
        retry.style.display = "block"
    }
},10)
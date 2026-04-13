var start_header = document.getElementById("startH")
var start_paragraph = document.getElementById("startP")
var character = document.getElementById("character")
var block = document.getElementById("block")
var game = document.getElementById("game")
var lost_text = document.getElementById("losttext")
lost_text.style.display = "none";
var retry = document.getElementById("retry")
retry.style.display = "none";
var lost = false
var started = false
var min = 600
var max = 2400
function jump(){
    if(!lost){
        if(!started){
            started = true
            start_paragraph.style.visibility = "hidden" 
            start_header.style.visibility = "hidden"
            block.style.animationPlayState = "running";
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
    lost = false;
    started = false;
});
var checkded = setInterval(function(){
    if (!started) return;   
    var characterRect = character.getBoundingClientRect();
    var blockRect = block.getBoundingClientRect();
    if(characterRect.right < blockRect.left||
       characterRect.bottom < blockRect.top && 
       characterRect.bottom < blockRect.top || 
       !characterRect.top > blockRect.bottom){
        block.style.animationDuration = string(Math.floor(Math.random() * (max - min + 1)) + min) + ms;
    }
    var overlap = !(characterRect.right < blockRect.left|| 
                    characterRect.left > blockRect.right || 
                    characterRect.bottom < blockRect.top || 
                    characterRect.top > blockRect.bottom);


    if(overlap){
        game.style.display = "none"
        lost_text.style.display = "block"
        lost = true
        retry.style.display = "block"
    }
},10);
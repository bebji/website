const meme_button = document.getElementById("meme_button");
const memes = document.querySelectorAll("img[id^='mem']");
let memes_hidden = true;
async function showmemes(){
    for (const img of memes) {
        img.style.visibility = "visible";
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}
async function hidememes(){
    for (const img of memes) {
        img.style.visibility = "hidden";
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

memes.forEach(img => {
    img.style.visibility = "hidden"
})
meme_button.addEventListener("click", async () => {
    memes_hidden = !memes_hidden;
    meme_button.textContent = memes_hidden ? "summon memes" : "banish memes";
    if (memes_hidden) {
        hidememes()
    } else {
        await showmemes(); // show one by one
    }
});
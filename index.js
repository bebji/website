let password = "";
let passwords = [];
let usernames = [];
let username;
document.getElementById("btn").onclick = function(){
    username = document.getElementById("usrnm").value;
    console.log(username);
    console.log(usernames);
    if(usernames.includes(username)){
        console.log("same")
        document.getElementById("label1").textContent = "password: "
        document.getElementById("btn").onclick = function(){
            password = document.getElementById("usrnm").value;
            if(passwords.includes(password)){
                console.log("same")
                window.location.href = "index2.html";
            }
        }

    }
}

document.getElementById("btn2").onclick = function(){
    usernames.push(window.prompt("new username: "));
    passwords.push(window.prompt("new password: "));
}

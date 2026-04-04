const BIN_ID_PSWD = '69d1674caaba882197c5442b';
const BIN_ID_USRNM = '69d1653636566621a87c70ab';
const MASTER_KEY = '$2a$10$CJzvjUoyQvMEiuUS6Wf.bO4ACUrEUQQdhyhpLf02l69XKx5RtM7C2';
async function readUsernames() {

  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID_USRNM}?meta=false`, {
      method: 'GET',
      headers: {
        'X-Master-Key': MASTER_KEY
      }
    });

    if (!response.ok) throw new Error('Failed to fetch data');

    const usrnmdata = await response.json();
    return usrnmdata;
  } catch (error) {
    console.error('Error reading bin:', error);
  }
}
async function readPasswords() {
  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID_PSWD}?meta=false`, {
      method: 'GET',
      headers: {
        'X-Master-Key': MASTER_KEY
      }
    });

    if (!response.ok) throw new Error('Failed to fetch data');

    const pswddata = await response.json();
    return pswddata;
  } catch (error) {
    console.error('Error reading bin:', error);
  }
}
let password;
let username;

document.getElementById("btn").onclick = async function(){
    username = document.getElementById("usrnm").value;
    const usrnmdata = await readUsernames(); 
    const pswddata = await readPasswords();
    let usernames = JSON.stringify(usrnmdata)
    let passwords = JSON.stringify(pswddata)
    JSON.stringify(usernames)
    console.log(username);
    console.log(usernames);
    if(usernames.includes(username)){
        console.log("same")
        usrindex = usernames.indexOf(username)
        console.log(usrindex, usernames, passwords)
        document.getElementById("label1").textContent = "password: "
        document.getElementById("btn").onclick = async function(){
            password = document.getElementById("usrnm").value; 
            if(passwords[usrindex] == password){
                console.log("same")
                window.location.href = "index2.html";
            }
        }

    }
}

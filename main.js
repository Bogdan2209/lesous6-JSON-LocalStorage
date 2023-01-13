


const getS = selector => document.querySelector(selector);
let userList;

getS(".signInNow").addEventListener("click", function () {
    getS(".block").classList.add('hidden');
    getS(".modal").classList.remove('hidden');
    getS('.incorect').classList.add("hidden")
})

getS(".signUpNow").addEventListener("click", function () {
    getS(".block").classList.remove('hidden');
    getS(".modal").classList.add('hidden');
})


let NameRegExp = /^[a-zA-Z]{1,20}$/
let EmailRegExp = /^([a-z0-9A-Z]+\.)*[a-z0-9A-Z]+@[a-z0-9A-Z]+(\.[a-z0-9A-Z]+)*\.[a-z0-9A-Z]*$/
let passRegExp = /^[a-zA-Z0-9]{8,15}$/


let newName
let lastName
let emails
let pass



function tt() {
    if (pass && emails && lastName && newName) {
        getS(`#button`).disabled = false
        getS(`#button`).style.backgroundColor = `green`
    }
    else{
        getS(`#button`).disabled = true
        getS(`#button`).style.backgroundColor = `blue`

    }
}

getS(`#name`).oninput = function () {
    newName = NameRegExp.test(this.value)
    if (newName) {
        this.style.border = `2px solid green`
    }
    else {
        this.style.border = `2px solid red`
    }
    tt() 

}
getS(`#lastname`).oninput = function () {
    lastName = NameRegExp.test(this.value)
    if (lastName) {
        this.style.border = `2px solid green`
    }
    else {
        this.style.border = `2px solid red`
    }
    tt() 
}
getS(`#Email`).oninput = function () {
    emails = EmailRegExp.test(this.value)
    if (emails) {
        this.style.border = `2px solid green`
    }
    else {
        this.style.border = `2px solid red`
    }
    tt() 
}

getS(`#pasworld`).oninput = function () {
    pass = passRegExp.test(this.value)
    if (pass) {
        this.style.border = `2px solid green`
    }
    else {
        this.style.border = `2px solid red`
    }
    tt() 
}



function setUser() {
    let newUser = {}
    newUser.firstN = getS(`#name`).value;
    newUser.lastN = getS(`#lastname`).value;
    newUser.email = getS(`#Email`).value;
    newUser.password = getS(`#pasworld`).value;
    localStorage.setItem(localStorage.length, JSON.stringify(newUser))
}

function getUser() {
    usersList = [];
    for (let i = 0; i < localStorage.length; i++) {
        let user = JSON.parse(localStorage.getItem(i))
        usersList.push(user);
    }

}

function checkStorageEmail() {
    getUser()
    for (let i = 0; i < usersList.length; i++) {
        if (getS(`#Email`).value === usersList[i].email) {
            return false;
        }

    }
    return true;
}

getS(`#button`).addEventListener(`click`, function () {
    if (getS(`#name`).value != '' && getS(`#lastname`).value != '' && getS(`#Email`).value != '' && getS(`#pasworld`).value != '' && checkStorageEmail()) {
        setUser()
        getS(`#name`).value = '';
        getS(`#lastname`).value = '';
        getS(`#Email`).value = '';
        getS(`#pasworld`).value = '';
    }
    if (checkStorageEmail() != true){
        getS(".label").classList.remove('hidden');
    }
    if(checkStorageEmail()){
        getS(".label").classList.add('hidden');
    }
    getS(`#button`).disabled = true
    getS(`#button`).style.backgroundColor = `blue`
     newName = false
     lastName = false
     emails = false
     pass = false

     getS(`#pasworld`).style.border = `2px solid grey`
     getS(`#lastname`).style.border = `2px solid grey`
     getS(`#Email`).style.border = `2px solid grey`
     getS(`#name`).style.border = `2px solid grey`

    
})


function userProfil() {
    getUser();
    for (let i = 0; i < usersList.length; i++) {
        if (getS(".email2").value === usersList[i].email && getS(".password2").value === usersList[i].password) {
            getS(".name").textContent = `${usersList[i].firstN} ` + " " + `${usersList[i].lastN}`;
            getS(".info_email").textContent = `${usersList[i].email} `;
            return true;
        } else {
            getS(".incorect").classList.remove("hidden");
        }
    }
    return false;
}

getS(".signIn").addEventListener("click", function () {
    if (localStorage.length && userProfil()) {
        getS(".modal").classList.add("hidden");
        getS(".sign").classList.remove("hidden");
        getS(".email2").value = '';
        getS(".password2").value = ''
        userProfil();
    }
});


getS(`.signButton`).addEventListener('click',function(){

    getS(`.sign`).classList.add("hidden")

    getS(".block").classList.remove('hidden');
    getS('.incorect').classList.add("hidden")

})












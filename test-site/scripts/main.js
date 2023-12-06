

let myButton = document.querySelector("button");
let myHeading = document.querySelector('h1');

function SetUserName(){
    const myName = prompt("please enter your name.");
    if (!myName){
        SetUserName();
        }
        else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool,${myName}`;
    }
    }
if (!localStorage.getItem("name")){
    SetUserName();

}else{
    const storedName = localStorage.getItem('name');
    myHeading.textContent= `Mozilla is cool, ${storedName}`;}


myButton.onclick = () =>{
    SetUserName();
}
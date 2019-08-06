document.body.style.margin = '0px';
document.body.style.padding = '0px';
document.body.style.background = '#777';

const headButton = document.getElementById('heading');

function changeHead() {
    headButton.innerHTML = 'This heading text has been changed!';
};

function toggle(){
    let list = document.getElementById("toggleList");
    if(list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
};

function changeBg() {
    document.body.style.background = '#ff6666';
};

function createBtn() {
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Random Button";
    document.body.appendChild(btn);
    btn.style.marginLeft = '400px'; 
    btn.style.marginTop = '200px';   
};

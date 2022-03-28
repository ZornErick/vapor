//Style and SPA Functions
function catalogButton() {
    document.getElementById("createSection").style.display = "none";   document.getElementById("readSection").style.display = "flex";
    
    document.getElementById("catalogButton").style = 
        "background: linear-gradient(-45deg, #cf85f2, #a683fc, #7485e6, #6ab8fc);background-size: 400% 400%;	animation: gradient 10s ease infinite;";
    document.getElementById("createButton").style =
        "background: none; background-color: black"; 
}

function createButton() {     
    document.getElementById("createSection").style.display = "flex";   document.getElementById("readSection").style.display = "none";
    
    document.getElementById("createButton").style = 
        "background: linear-gradient(-45deg, #cf85f2, #a683fc, #7485e6, #6ab8fc);background-size: 400% 400%;	animation: gradient 10s ease infinite;";
    document.getElementById("catalogButton").style =
        "background: none; background-color: black";             
}

var regDarkMode = "";
function darkMode() {
    regDarkMode = JSON.stringify(document.getElementById("darkmodeSwitch").checked);
    
    if (regDarkMode == "true"){
        document.getElementById('cssSwitch').href='jogosDark.css';
    }
    
    if (regDarkMode == "false"){
        document.getElementById('cssSwitch').href='jogosStyle.css';
    }
    localStorage.setItem('booleanDarkMode', regDarkMode);
}



function openPopUp(id) {
    lerJogoUnico(id);
    document.getElementById('popUpRead').style.display = "flex";
}

function closePopUp() {
    document.getElementById('popUpRead').style.display = "none";
}


function openForm(id) {
    exibirInfoEditavel(id);
    document.getElementById('popUpUpdate').style.display = "flex";
    
}

function closeForm() {
    document.getElementById('popUpUpdate').style.display = "none";
}

//Open Page
window.onload = function start(){
    if(localStorage.getItem('publisherId') == null){
        alert('Nenhum publicador selecionado!')
        window.location.href = '../index.html';
    }
    
    lerJogos();
    if(localStorage.getItem('booleanDarkMode') == "true"){
       document.getElementById("darkmodeSwitch").checked = true;
    }
    darkMode();
}

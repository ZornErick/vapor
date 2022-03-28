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
        document.getElementById('cssSwitch').href='publicadoresDark.css';
    }
    
    if (regDarkMode == "false"){
        document.getElementById('cssSwitch').href='publicadoresStyle.css';
    }
    localStorage.setItem('booleanDarkMode', regDarkMode);
}


function validaCnpj(v){
    v=v.replace(/\D/g,"")
    v=v.replace(/^(\d{2})(\d)/,"$1.$2")
    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") 
    v=v.replace(/\.(\d{3})(\d)/,".$1/$2")         
    v=v.replace(/(\d{4})(\d)/,"$1-$2")             
    document.getElementById('formCnpj').value = v;
}
function validaUpdtCnpj(v){
    v=v.replace(/\D/g,"")
    v=v.replace(/^(\d{2})(\d)/,"$1.$2")
    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") 
    v=v.replace(/\.(\d{3})(\d)/,".$1/$2")         
    v=v.replace(/(\d{4})(\d)/,"$1-$2")             
    document.getElementById('updateCnpj').value = v;
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
    lerPublicadores();
    if(localStorage.getItem('booleanDarkMode') == "true"){
       document.getElementById("darkmodeSwitch").checked = true;
    }
    darkMode();
}

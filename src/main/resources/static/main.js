window.onload = function start(){
if(localStorage.getItem('booleanDarkMode') == "true"){
    document.getElementById("darkmodeSwitch").checked = true;
}   
darkMode();
}

var regDarkMode = "";
function darkMode() {
    regDarkMode = JSON.stringify(document.getElementById("darkmodeSwitch").checked);
    
    if (regDarkMode == "true"){                document.getElementById('cssSwitch').href='dark.css';
    }    
    if (regDarkMode == "false"){                document.getElementById('cssSwitch').href='style.css';
    }
    localStorage.setItem('booleanDarkMode', regDarkMode);
}

function selectPublisher(){
    document.getElementById('content').innerHTML= ""
    //FETCH PUBLISHERS 
    fetch('/api/publicadores')
        .then(resposta => resposta.json())
        .then(function(response) {
        var src = ""
        +"<header id='publisherHeader'>"
            +"<button onclick='location.reload()'>Voltar</button>"
            +"<h2>Escolha o publicador a ser utilizado nessa sessão:</h2>"
        +"</header>"
        +"<section id='publisherSection'>"
            +"<select id='category'><option disabled selected value='noPublisher'>Escolha o Publicador</option>";
        
        for(var i=0; i<response.length; i++){
            src+="<option value='"+response[i].id+"'>"+response[i].nome+"</option>"
        }
        
        document.getElementById('content').innerHTML= src + "</select><button onclick='acessarJogos()'>Acessar</button></section>";
    });
    
}


function acessarJogos(){
    if (document.getElementById("category").value == "noPublisher"){
        alert('Escolha um publicador antes de prosseguir!');
        location.reload();
    }
    else {
        var regPublisher = document.getElementById("category").value;
        localStorage.setItem('publisherId', regPublisher);
        window.location.href = 'jogos/jogos.html';
    }
}
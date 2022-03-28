const URL = '/api/publicadores';

//CREATE
function enviarPublicador(){
    fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        nome: document.getElementById("formTitulo").value,
        cnpj: document.getElementById("formCnpj").value,
        email: document.getElementById("formEmail").value
    }),
    headers: {'Content-type':'application/json'}
    })
}

//READ
function lerPublicadores() {
    fetch(URL)
      .then(resposta => resposta.json())
      .then(function(response) {
        var src = '';
        for(var i=0; i<response.length; i++){
            
         src +="<div class='publicadores' id='"+response[i].id+"'>"
                    +"<header>"
                        +"<h3>"
                            +response[i].nome
                        +"</h3>"
                        +"<p>"+response[i].email+"</p>"
			+"<p>"+response[i].cnpj+"</p>"
                    +"</header>"
                    +"<aside>"
                        +"<button type='button' onclick='openForm("+response[i].id+")'>"
                            +"<img src='../media/edit.png' alt='plus icon'>"
                        +"</button>"
                        +"<button type='button' onclick='deletarPublicador("+response[i].id+")'>"
                            +"<img src='../media/delete.png' alt='plus icon'>"
                        +"</button>"
                    +"</aside>"
                +"</div>" 
                
        }
        document.getElementById('catalog').innerHTML = src; 
    })
}

//UPDATE
function exibirInfoEditavel(id){
    fetch(URL+'/'+id)
    .then(resposta => resposta.json())
    .then(function(response) {        
        document.getElementById('updateTitle').value = response.nome;
        document.getElementById('updateCnpj').value = response.cnpj;
        document.getElementById('updateEmail').value = response.email;
        document.getElementById('publisherId').innerHTML = response.id;
    }) 
}

function editarPublicador(){
    var id = document.getElementById('publisherId').innerHTML;    
    fetch(URL+'/'+id, {
    method: 'PUT',
    body: JSON.stringify({
        id: id,
        nome: document.getElementById("updateTitle").value,
        cnpj: document.getElementById("updateCnpj").value,
        email: document.getElementById("updateEmail").value
    }),
    headers: {'Content-type':'application/json'}
    })
}

function deletarPublicador(id){
    fetch(URL+'/'+id, {method: 'DELETE'});
    lerPublicadores();
}
const URL = '/api/jogos';

//CREATE
function enviarJogo(){
    var youtubeId = document.getElementById("formLink").value;
    youtubeId = youtubeId.slice(youtubeId.length - 11);
    youtubeId.toLowerCase();
    fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        'titulo': document.getElementById("formTitulo").value,
        'descricao': document.getElementById("formDescricao").value,
        'preco': document.getElementById("formPreco").value,
        'url': ""+youtubeId+"",
        'publicador': { id: localStorage.getItem('publisherId') }
    }),
    headers: {'Content-type':'application/json'}
    })
}

//READ
function lerJogos() {
    fetch(URL)
      .then(resposta => resposta.json())
      .then(function(response) {
        var src = '';
        for(var i=0; i<response.length; i++){
            if(response[i].publicador.id == localStorage.getItem('publisherId')){
                src +=
                "<div class='games' id='"+response[i].id+"'>"
                    +"<header>"
                        +"<h3 onclick='openPopUp("+response[i].id+")'>"
                            +response[i].titulo
                        +"</h3>"
                        +"<p>R$ "+response[i].preco+"</p>"
                    +"</header>"
                    +"<aside>"
                        +"<button type='button' onclick='openForm("+response[i].id+")'>"
                            +"<img src='../media/edit.png' alt='plus icon'>"
                        +"</button>"
                        +"<button type='button' onclick='deletarJogo("+response[i].id+")'>"
                            +"<img src='../media/delete.png' alt='plus icon'>"
                        +"</button>"
                    +"</aside>"
                +"</div>"
            }
        }
        document.getElementById('catalog').innerHTML = src; 
    })
}

//READ ONE
function lerJogoUnico(id){
    fetch(URL+'/'+id)
    .then(resposta => resposta.json())
    .then(function(response) {
        document.getElementById('titleRead').innerHTML = response.titulo+"<br><span id='publisherName'>"+response.publicador.nome+"</span>";
        document.getElementById('video').src = "https://www.youtube.com/embed/"+response.url; 
        document.getElementById('priceRead').innerHTML = response.preco; 
        document.getElementById('descriptionRead').innerHTML = response.descricao; 
    })
}

//UPDATE
function exibirInfoEditavel(id){
    fetch(URL+'/'+id)
    .then(resposta => resposta.json())
    .then(function(response) {
        
        document.getElementById('updateTitle').value = response.titulo;
        document.getElementById('updateVideo').value = "https://www.youtube.com/embed/"+response.url; 
        document.getElementById('updatePreco').value = response.preco; 
        document.getElementById('updateDescricao').innerHTML = response.descricao;
        document.getElementById('gameId').innerHTML = response.id;
    }) 
}


function editarJogo(){
    var id = document.getElementById('gameId').innerHTML;
    var youtubeId = document.getElementById("updateVideo").value;
    youtubeId = youtubeId.slice(youtubeId.length - 11);
    youtubeId.toLowerCase();
    fetch(URL+'/'+id, {
    method: 'PUT',
    body: JSON.stringify({
        id: id,
        titulo: document.getElementById("updateTitle").value,
        descricao: document.getElementById("updateDescricao").value,
        preco: document.getElementById("updatePreco").value,
        url: ""+youtubeId+"",
        publicador: { id: localStorage.getItem('publisherId') }
    }),
    headers: {'Content-type':'application/json'}
    })
}

function deletarJogo(id){
    fetch(URL+'/'+id, {method: 'DELETE'});
    lerJogos();
}
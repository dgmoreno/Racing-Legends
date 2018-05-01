document.addEventListener('DOMContentLoaded', function main(e) {
    //**************Categorias*****************************
    var categor = document.getElementById("categorias");
    var barra = document.getElementById("topbar");
    var pilot = document.getElementById("pilotos");
    var detalhes = document.getElementById("detalhesP");
    var multimedia = document.getElementById("multimedia");

    var carreira = document.getElementById("carreira");
    var multi = document.getElementById("minimulti");
    var video = document.createElement('iframe');

    document.body.appendChild(pilot);
    barra.addEventListener("click", function () {
        
        pilot.style.display = "none";
        detalhes.style.display = "none";
        categor.style.display = "block";
    });
    
    document.body.appendChild(barra);
    document.body.appendChild(categor);
    document.body.appendChild(pilot);
    document.body.appendChild(detalhes);
    function mostrarCategorias(categorias) {
        for (var i = 0; i < categorias.length; i++) {
            var titulo = document.createElement('h2');
            var p2 = document.createElement('p');
            var img = document.createElement('img');
            var caixa = document.createElement('div');
            let a = categorias[i].id;
            caixa.className = 'caixa';
            titulo.className = 'titulo';
            titulo.textContent = categorias[i].name;
            
            p2.textContent = categorias[i].description;
            img.src = getImg(categorias[i].id);
           
            categor.appendChild(caixa);
            caixa.appendChild(titulo);
            caixa.appendChild(p2);
            caixa.appendChild(img);

            img.addEventListener("click", function () {
                if (pilot.style.display = "none") {
                    pilot.innerHTML = "";
                    pilot.style.display = "block";
                }
                troca(a);
            });
        
        }
        ///////////////////////
        
    }


    function ecraCategorias() {
        return getCategorias()
            .then(function (categorias) {
                mostrarCategorias(categorias);
            })
            .catch(function (erro) {
                console.error(erro);
            });
    }


    ecraCategorias();


    //**************************************************

    //*****************Pilotos**************************

    function mostrarPilotos(idCategoria) {

        for (var i = 0; i < idCategoria.length; i++) {
            var p3 = document.createElement('h2');
            var p4 = document.createElement('p');
            var img1 = document.createElement('img');
            var p5 = document.createElement('p');
            let b = idCategoria[i].id;

            p3.textContent = idCategoria[i].name;
            p4.textContent = "Nacionalidade: " + idCategoria[i].nationality;
            img1.src = getImgP(idCategoria[i].id);

            img1.addEventListener("click", function () {
               
                pilot.style.display = "none";
                carreira.innerHTML = "";
                multi.innerHTML = "";
                video.innerHTML = "";
                detalhes.style.display = "block";
                
                ecraDetalhes(b);
            });

            pilot.appendChild(p3);
            pilot.appendChild(p4);
            pilot.appendChild(img1);
           
        }

    }

    function ecraPilotos(idCategoria) {
        return getDrivers(idCategoria)
            .then(function (idCategoria) {
                mostrarPilotos(idCategoria);
            }).catch(function (erro) {
                console.error(erro);
            });
            
    }    


    //ecraPilotos('f1');

    function troca(id_categorias) {
        categor.style.display = "none";

        ecraPilotos(id_categorias);
        
    }

    function trocaP(idPiloto) {
        
        ecraDetalhes(idPiloto);

    }

    function mostraDetlhes(idPiloto) {
        var nome = document.getElementById("nome");
        var nick = document.getElementById("alcunha");
        var datas = document.getElementById("data");
        var foto = document.getElementById("foto");
        var recordes = document.getElementById("records");
        var campeonatos = document.getElementById("campeonatos");
        var corrida = document.getElementById("corrida");
        var vitorias = document.getElementById("vitorias");
        var introducao = document.getElementById("introducao");




        nome.textContent = idPiloto.name;
        nick.textContent = idPiloto.nickname;
        datas.textContent = "Nasceu: " + idPiloto.birth_date + " Morreu: " + idPiloto.death_date;
        foto.src = getImgP(idPiloto.id);

        campeonatos.textContent = "Campeonatos Ganhos: " + idPiloto.records.championship_victories;
        corrida.textContent = "Primeira vitória: " + idPiloto.records.first_race_win;
        vitorias.textContent = "Corridas Ganhas: " + idPiloto.records.race_victories;

        introducao.textContent = idPiloto.introduction;

        for (var i = 0; i < idPiloto.career.length; i++) {
            var h3 = document.createElement('h3');
            var p = document.createElement('p');
            var teste = document.getElementById('teste');

            h3.textContent = idPiloto.career[i].title;
            p.textContent = idPiloto.career[i].text;

            carreira.appendChild(h3);
            carreira.appendChild(p);
           
        }

        for (k = 0; k < idPiloto.multimedia.videos.length; k++) {
            var img = document.createElement('img');
            
            var captionText = document.getElementById("caption");

            //link.href = "www.youtube.com/" + idPiloto.multimedia.videos[k].youtube_id;

            img.src = 'imagem/youtube.png';
            img.title = idPiloto.multimedia.videos[k].caption;

            multi.appendChild(img);

            let link = idPiloto.multimedia.videos[k].youtube_id;
            

            img.onclick = function () {
                
                multimedia.style.display = "block";
                multimedia.style.textAlign = "center";
                video.src = "https://www.youtube.com/embed/" + link;
                video.allowFullscreen = "true";
                captionText.innerHTML = this.title;
                multimedia.appendChild(video);
            }
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            span.onclick = function () {
                
                multimedia.style.display = "none";
                
            }

        }


        for (var j = 0; j < idPiloto.multimedia.images.length; j++) {
            var img = document.createElement('img');

            img.src = getMulti(idPiloto.id, idPiloto.multimedia.images[j].id);
            img.title = idPiloto.multimedia.images[j].caption;

            multi.appendChild(img);
            var modalImg = document.getElementById("img01");
            var captionText = document.getElementById("caption");

            img.onclick = function () {
                multimedia.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.title;
            }
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            span.onclick = function () {
                multimedia.style.display = "none";
            }
        }

        
    }



    function ecraDetalhes(idpiloto) {
        return getDetalhe(idpiloto)
            .then(function (idpiloto) {
                mostraDetlhes(idpiloto);
            }).catch(function (erro) {
                console.error(erro);
            });
    }

    //ecraDetalhes('colinmcrae');

});
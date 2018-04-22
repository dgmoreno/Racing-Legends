document.addEventListener('DOMContentLoaded', function main(e) {
    //**************Categorias*****************************

    function mostrarCategorias(categorias) {
        var categor = document.getElementById("categorias");
        
        document.body.appendChild(categor);
        for (var i = 0; i < categorias.length; i++) {
            var p = document.createElement('p');
            var p1 = document.createElement('p');
            var p2 = document.createElement('p');
            var img = document.createElement('img');
            p.textContent = categorias[i].name;
            //p1.textContent = categorias[i].id;
            p2.textContent = categorias[i].description;
            img.src = getImg(categorias[i].id);
            //p1.textContent = getImg(categorias[i].id);
            categor.appendChild(p);
            categor.appendChild(p1);
            categor.appendChild(p2);
            categor.appendChild(img);
            
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

        var pilot = document.getElementById("pilotos");
        document.body.appendChild(pilot);

        for (var i = 0; i < idCategoria.length; i++) {
            var p3 = document.createElement('p');
            var p4 = document.createElement('p');
            var img1 = document.createElement('img');
            var p5 = document.createElement('p');
            p3.textContent = idCategoria[i].name;
            p4.textContent = idCategoria[i].nationality;
            img1.src = getImgP(idCategoria[i].id);
            
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





});
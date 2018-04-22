//Ficheiro de funções de acessoa a dados

//1)
function getCategorias() {
    var url = "http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories";

    return fetch(url, { headers: { Accept: 'application/json' } })
        .then(function (resposta) {
            if (resposta.status == 200) {
                return resposta.json();
            } else {
                return Promise.reject(new Error("Erro ao obter categorias"));
            }
        });
}

function getImg(id_categoria) {
    var url = "http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories/" + id_categoria + "/image";

    return url;
}

function getDrivers(id_categoria) {
    var url = "http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories/" + id_categoria + "/drivers";

    return fetch(url, { headers: { Accept: 'application/json' } })
        .then(function (resposta) {
            if (resposta.status == 200) {
                return resposta.json();
            } else {
                return Promise.reject(new Error("Erro ao obter categorias"));
            }
        });
}

function getImgP(id_piloto) {
    var url = "http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/drivers/" + id_piloto + "/image";

    return url;
}

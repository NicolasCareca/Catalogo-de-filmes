const inputBuscarFilme = document.querySelector("#input-buscar-filme")
const btnBuscarFilme = document.querySelector("#btn-buscar-filme")
const navFavoritos = document.querySelector("#favoritos")
const filmesalvo = document.querySelector("#btn-salvar")


btnBuscarFilme.onclick = (event) => {
  event.stopPropagation();
  if (inputBuscarFilme.value.length > 0) {
    let filmes = new Array();
    fetch("http://www.omdbapi.com/?apikey=7246f6a2&s=" + inputBuscarFilme.value)
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.Search) {
          resp.Search.forEach((item) => {
            console.log(item);
            let filme = new Filme(
              item.imdbID,
              item.Title,
              item.Year,
              item.Genre,
              null,
              item.Poster,
              null,
              null,
              null,
              item.Rated,
              null
            );
            filmes.push(filme);
          });
          listarFilmes(filmes);
        } else {
          console.log("Nenhum filme encontrado.");
        }
      });
  }
  return false;
};

let listarFilmes = async (filmes) => {
  let listaFilmes = await document.querySelector("#lista-filmes");
  listaFilmes.style.display = "flex";
  listaFilmes.innerHTML = "";
  document.querySelector("#mostrar-filmes").innerHTML = "";
  document.querySelector("#mostrar-filmes").style.display = "none";

  if (filmes.length > 0) {
    filmes.forEach(async (filme) => {

      listaFilmes.appendChild(await filme.getCard());
      filme.getBtnDetalhes().onclick = () => {
        detalhesFilme(filme.id);
        document.querySelector("#mostrar-filmes").style.display = "flex";
        document.querySelector("#lista-filmes").style.display = "none";
      }
    });
  }
}

let detalhesFilme = async (id) => {
  fetch("http://www.omdbapi.com/?i=" + id + "&apikey=7246f6a2")
    .then((resp) => resp.json())
    .then((resp) => {

      let filme = new Filme(
        resp.imdbID,
        resp.Title,
        resp.Year,
        resp.Genre.split(","),
        resp.Runtime,
        resp.Poster,
        resp.Plot,
        resp.Director,
        resp.Actors.split(","),
        resp.Awards,
        resp.imdbRating
      )
      document.querySelector("#mostrar-filmes").appendChild(filme.getDetalhesFilme());
      document.querySelector("#btn-fechar").onclick = () => {
        document.querySelector("#lista-filmes").style.display = "flex";
        document.querySelector("#mostrar-filmes").innerHTML = "";
        document.querySelector("#mostrar-filmes").style.display = "none";
      }

      document.querySelector("#btn-salvar").onclick = () => {
        document.querySelector("#btn-salvar").setAttribute("class", "bi-playstation");
        filmesalvo == 1;
        salvarFilme(filme);
      }

      let filmesString = localStorage.getItem('filmesFavoritos');
      var filmes = JSON.parse(filmesString);
      filmes = JSON.stringify(filmes);
    });
}

function listarFavoritos() {
  let filmesFavoritos = localStorage.getItem('filmesFavoritos');
  filmesFavoritos = JSON.parse(filmesFavoritos);
  let filmes = new Array();
  filmesFavoritos.forEach((item) => {
    let filme = new Filme(
      item.id,
      item.titulo,
      item.ano,
      item.genero,
      item.duracao,
      item.cartaz,
      item.direcao,
      item.elenco,
      item.classificacao,
      item.avaliacao
    );
    filmes.push(filme);
  });
  listarFilmes(filmes);
}

const salvarFilme = (filme) => {
  const favoritosStr = localStorage.getItem('filmesFavoritos');
  const favoritos = favoritosStr ? JSON.parse(favoritosStr) : [];
  
  const filmeIndex = favoritos.findIndex(f => f.id === filme.id);
  if (filmeIndex !== -1) {
    favoritos.splice(filmeIndex, 1);
  } else {
    favoritos.push(filme);
  }
  
  localStorage.setItem('filmesFavoritos', JSON.stringify(favoritos));
}

const removerFilme = (id) => {
  const favoritosStr = localStorage.getItem('filmesFavoritos');
  const favoritos = favoritosStr ? JSON.parse(favoritosStr) : [];

  const filmeIndex = favoritos.findIndex(f => f.id === id);
  if (filmeIndex !== -1) {
    favoritos.splice(filmeIndex, 1);
    localStorage.setItem('filmesFavoritos', JSON.stringify(favoritos)); 
  }
}

//nao esta desfavoritado

navFavoritos.onclick = () => {
  
  listarFavoritos();
}



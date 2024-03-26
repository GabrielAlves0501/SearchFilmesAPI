 // Sua chave de API do TheMovieDB
const apiKey = '43949e7f9533a2681109186af34e4c74';
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzk0OWU3Zjk1MzNhMjY4MTEwOTE4NmFmMzRlNGM3NCIsInN1YiI6IjY1ZmFmMTUzYmYzMWYyMDE3ZWZkYmIzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OTEDpN4LbRZEnH0I1xxBD47TDc7o9CkL9qPqGOmIegs'
    }
  };
 // URL do endpoint para obter filmes 
const apiPopularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`;

 // Função para buscar e exibir filmes populares
 async function fetchPopularMovies() {
   try {
     const response = await fetch(apiPopularUrl);
     const data = await response.json();

     console.log(data)

     // Limpar a lista de filmes antes de adicionar novos
     const movieList = document.getElementById('movieList');
     movieList.innerHTML = '';

     // Iterar sobre os resultados e adicionar à lista
     data.results.forEach(movie => {
       const listItem = document.createElement('li');
       listItem.innerText = movie.title;
       const img = document.createElement('img');
       const poster = movie.poster_path;
       img.src = `https://image.tmdb.org/t/p/w200${poster}`
       movieList.appendChild(listItem);
       movieList.appendChild(img);
     });

     

   } catch (error) {
     console.error('Erro ao buscar filmes:', error);
   }
 }

function fetchSearchMovie(){
    let filme;
    const listSearch = document.getElementById('movies');
    filme = listSearch.value;
    const apiSearchMovie = `https://api.themoviedb.org/3/search/movie?query=${filme}&include_adult=false&language=pt-BR`
    
    fetch(apiSearchMovie, options)
        .then(response => response.json())
        .then(data => {
            // Limpa a lista antes de adicionar novos filmes
            if(filme !== ""){
            const movieList = document.getElementById('movieList');
            movieList.innerHTML = '';

            // Itera sobre os resultados e adiciona à lista
            data.results.forEach(movie => {
                const list = document.createElement('li');
                list.textContent = movie.title;
                const img = document.createElement('img');
                const poster = movie.poster_path;
                img.src = `https://image.tmdb.org/t/p/w200${poster}`
                movieList.appendChild(list);
                movieList.appendChild(img)
            });
            console.log(data)} else{
              window.alert('Favor preencha o campo pesquisa');
            }
        })
        
        .catch(err => console.error(err));
}

function fetchGenreMovie(){
  let genreAcao = document.createElement('button');
  genreAcao.innerText = "Ação"
  let divBotao = document.getElementById('botao')
  divBotao.appendChild(genreAcao);
  
  let genreTerror = document.createElement('button');
  genreTerror.innerText = "Terror"
  divBotao.appendChild(genreTerror);
  
  let genreAventura = document.createElement('button');
  genreAventura.innerText = "Aventura"
  divBotao.appendChild(genreAventura);
  
  let genreAnimacao = document.createElement('button');
  genreAnimacao.innerText = "Animação"
  divBotao.appendChild(genreAnimacao);
  
  let genreComedia = document.createElement('button');
  genreComedia.innerText = "Comédia"
  divBotao.appendChild(genreComedia);
  
  let genreFantasia = document.createElement('button');
  genreFantasia.innerText = "Fantasia"
  divBotao.appendChild(genreFantasia);
  
  let genreRomance = document.createElement('button');
  genreRomance.innerText = "Romance"
  divBotao.appendChild(genreRomance);
  
  let genreFiccao = document.createElement('button');
  genreFiccao.innerText = "Ficção"
  divBotao.appendChild(genreFiccao);

  let popular = document.createElement('button');
  popular.innerText = "Popular"
  divBotao.appendChild(popular);

  genreAcao.addEventListener('click', function(){
    fetch('https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=99', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  })
  
  genreTerror.addEventListener('click', function(){
    fetch('https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=27', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  })
  
  genreAventura.addEventListener('click', function(){
    fetch('https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=12', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  })

  genreAnimacao.addEventListener('click', function(){
    fetch('https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=16', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  })

  genreComedia.addEventListener('click', function(){
    fetch('https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=35', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  })

  genreFantasia.addEventListener('click', function(){
    fetch('https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=14', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  })

  genreRomance.addEventListener('click', function(){
    fetch('https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=10749', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  })
  
  genreFiccao.addEventListener('click', function(){
    fetch('https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=878', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  })

  popular.addEventListener('click', function(){
    fetch(apiPopularUrl)
    .then(response => response.json())
    .then(data => {
        const movieList = document.getElementById('movieList');
        movieList.innerHTML = '';
        data.results.forEach(movie => {
          const listItem = document.createElement('li');
          listItem.innerText = movie.title;
          const img = document.createElement('img');
          const poster = movie.poster_path;
          img.src = `https://image.tmdb.org/t/p/w200${poster}`
          movieList.appendChild(listItem);
          movieList.appendChild(img);
        });
    })
    .catch(err => console.error(err));
  })
}

function apareceMenu(){
  menu = document.querySelector('.menu');
 
    menu.classList.remove('desaparece')
    menu.classList.add('aparece')
  
}


 // Chamar a função para buscar e exibir filmes populares ao carregar a página
//window.onload = fetchPopularMovies();
//window.onload = fetchGenreMovie();
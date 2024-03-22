 // Sua chave de API do TheMovieDB
 const apiKey = '43949e7f9533a2681109186af34e4c74';
 const acessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzk0OWU3Zjk1MzNhMjY4MTEwOTE4NmFmMzRlNGM3NCIsInN1YiI6IjY1ZmFmMTUzYmYzMWYyMDE3ZWZkYmIzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OTEDpN4LbRZEnH0I1xxBD47TDc7o9CkL9qPqGOmIegs'
 

 // URL do endpoint para obter filmes 
 const apiPopularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
 

 

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
       img.src = `https://image.tmdb.org/t/p/w500${poster}`
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
    const apiSearchMovie = `https://api.themoviedb.org/3/search/movie?query=${filme}&include_adult=false`
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzk0OWU3Zjk1MzNhMjY4MTEwOTE4NmFmMzRlNGM3NCIsInN1YiI6IjY1ZmFmMTUzYmYzMWYyMDE3ZWZkYmIzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OTEDpN4LbRZEnH0I1xxBD47TDc7o9CkL9qPqGOmIegs'
        }
      };
    fetch(apiSearchMovie, options)
        .then(response => response.json())
        .then(data => {
            // Limpa a lista antes de adicionar novos filmes
            const movieList = document.getElementById('movieList');
            movieList.innerHTML = '';

            // Itera sobre os resultados e adiciona à lista
            data.results.forEach(movie => {
                const list = document.createElement('li');
                list.textContent = movie.title;
                const img = document.createElement('img');
                const poster = movie.poster_path;
                img.src = `https://image.tmdb.org/t/p/w500${poster}`
                movieList.appendChild(list);
                movieList.appendChild(img)


            });
            console.log(data)
        })
        
        .catch(err => console.error(err));
}

 // Chamar a função para buscar e exibir filmes populares ao carregar a página
window.onload = fetchPopularMovies();
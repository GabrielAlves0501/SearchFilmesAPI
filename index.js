 // Sua chave de API do TheMovieDB
 const apiKey = '43949e7f9533a2681109186af34e4c74';
 const acessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzk0OWU3Zjk1MzNhMjY4MTEwOTE4NmFmMzRlNGM3NCIsInN1YiI6IjY1ZmFmMTUzYmYzMWYyMDE3ZWZkYmIzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OTEDpN4LbRZEnH0I1xxBD47TDc7o9CkL9qPqGOmIegs'
 let filme;

 // URL do endpoint para obter filmes 
 const apiPopularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
 const apiSearchMovie = `https://api.themoviedb.org/3/search/movie?query=${filme}&include_adult=false?acess_token=${acessToken}`

 

 

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
       movieList.appendChild(listItem);

     });
   } catch (error) {
     console.error('Erro ao buscar filmes:', error);
   }
 }

function fetchSearchMovie(){
    fetch(apiSearchMovie)
        .then(response => response.json())
        .then(response => console.log(response))
        .then()
        .catch(err => console.error(err));
    
    const listSearch = document.getElementById('movies');
    filme = listSearch.value;
    
   
}
 

 // Chamar a função para buscar e exibir filmes populares ao carregar a página
 window.onload = fetchSearchMovie;
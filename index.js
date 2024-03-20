 // Sua chave de API do TheMovieDB
 const apiKey = '43949e7f9533a2681109186af34e4c74';

 // URL do endpoint para obter filmes populares
 const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

 // Função para buscar e exibir filmes populares
 async function fetchPopularMovies() {
   try {
     const response = await fetch(apiUrl);
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

 

 // Chamar a função para buscar e exibir filmes populares ao carregar a página
 window.onload = fetchPopularMovies;
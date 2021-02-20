const key = '8bcae79e942a87faf7dbffe54ad7e06c'; //sesuai API Key Anda
const endpoint_url = 'https://api.themoviedb.org/3/';

function getListMovie(services, sectiontitle) {
 fetch(endpoint_url + services + "?api_key=" + key + "&language=en-US&page=1")
     .then(status)
     .then(json)
     .then(function(data) {
     // Objek/array JavaScript dari response.json() masuk lewat data.
     // Menyusun komponen card movie secara dinamis
     var moviesHTML = "";
     data.results.forEach(function(movie) {
     moviesHTML += `
         <div class="col m3 s6">
         <div class="card">
         <a href="./movie.html?id=${movie.id}">
         <div class="card-image waves-effect waves-block waves-light">
         <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
         </div>
         </a>
         <div class="card-content center-align">
         <strong>${movie.title}</strong><br>
         <strong>Release Date: ${movie.release_date}</strong>
         </div>
         </div>
         </div>
     `;
     });
     document.getElementById("movie_list").innerHTML = moviesHTML;
     document.getElementById("section_title").innerHTML = sectiontitle;

     })
     .catch(error);
}

function getMovie(movie_id) {
  var detail, review;
  fetch(endpoint_url + "movie/" + movie_id + "/reviews?api_key=" + key + "&language=en-US&page=1")
  .then(status)
  .then(json)
  .then(function(data){
    review=data;
    return fetch(endpoint_url + "movie/" + movie_id + "?api_key=" + key + "&language=en-US&page=1")
  })
  .then(status)
  .then(json)
  .then(function(data) {
      // Objek/array JavaScript dari response.json() masuk lewat data.
      // Menyusun komponen card movie secara dinamis
        var moviesHTML = "";
        detail=data;

        var genre = "";
        for (i = 0; i < detail.genres.length; i++) {
          genre += detail.genres[i].name + ", ";
        }

        if (review.results.length>0){
          var rate = JSON.stringify(review.results[0].author_details.rating) + "/10";
        } else {
          rate = "no rating yet";
        }

        moviesHTML += `
        <div class="col s6">
        <h3>${detail.title}</h3>
          <strong> Genre: ${genre}</strong>
          <br>
          <strong>${detail.overview}</strong>
          <br> <br>
          <strong>Release: ${detail.release_date}</strong>
          <br>
          <strong>Rating: ${rate}</strong>
        </div>
        <div class="col s6">
          <img src="https://image.tmdb.org/t/p/w500${detail.poster_path}" style="margin-left:50px;margin-top:30px;width:400px;height:600px;"/>
        </div>
        `;
      document.getElementById("movie_detail").innerHTML = moviesHTML;
    })
    .catch(error);
}

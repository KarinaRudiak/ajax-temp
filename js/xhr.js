const getDate = (url) => fetch(url)
.then((responsive) => responsive.json())
.then((json) => {
    if(json.Search) return json.Search;
    throw Error('Сервер вернул не то, что нам нужно!')
});



//let ironman = getDate(`http://www.omdbapi.com/?s=${search1}&apikey=f212fddf`)

//Promise.all([ironman, superman])
//.then((res) => res.forEach(
  //  (movies) => movies.forEach((movie) => addMovieToList(movie))
    //))
//.catch((err) => console.log(err));

let searchLast = null;
inputSearch.addEventListener('keyup', (e) => {
    delay(() => {
        const searchString = e.target.value;
        
        if (searchString && searchString.length > 3 && searchString !== searchLast ){
            
            if(!triggerMod) clearMoviesMarkup();

            getDate(`https://www.omdbapi.com/?s=${searchString}&apikey=f212fddf`)
            .then((movies) => movies.forEach((movie) => addMovieToList(movie)))
            .catch((err) => console.log(err));
        }

        searchLast= searchString;
    }, 1000);
});

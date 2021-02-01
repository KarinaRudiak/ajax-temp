let movieList = null;
let inputSearch = null;
let triggerMod = false;

const creteHeader = (container) =>{
    const header = document.createElement('h1');
    header.innerText = 'Приложение для поиска фильмов';

    container.appendChild(header);
    

};

const setAttribute = (el, attrs ) =>{
    for (let key in attrs) el.setAttribute(key, attrs[key]);
};

const trigger = () =>{
    triggerMod = !triggerMod;
};

const createSearchBox = (container) => {

    const searchBox =  document.createElement('div');
    const  input = document.createElement('input');
    const labelForInput = document.createElement('label');
    const checkbox = document.createElement('input');
    const labelForCheckbox = document.createElement('label');

    searchBox.classList.add('search');

    setAttribute(input, {
        class: 'search__input',
        id: 'search',
        placeholder: 'Начните вводить текст...',
        type: 'text'

    });

    labelForInput.innerText = 'Поиск фильмов';
    labelForCheckbox.innerText = 'Добавить фильм к сущесвующему тексту';


    setAttribute(labelForInput, {
        class: 'search__label-input',
        for: 'search'
    });

    setAttribute(checkbox, {
        class: 'search__checkbox',
        id: 'checkbox',
        type: 'checkbox'

    });

    checkbox.addEventListener('click', trigger);

    setAttribute(labelForCheckbox, {
        class: 'search__label-checkbox',
        for: 'checkbox'
    });

    searchBox.append(labelForInput, input, checkbox, labelForCheckbox );


    container.appendChild(searchBox);

};

const createMarkup = () =>{

    const container = document.createElement('div');
    container.classList.add('container');

    creteHeader(container);

    createSearchBox(container);

    const movies = document.createElement('div');
    movies.classList.add('movies');

    container.appendChild(movies);
 
    document.querySelector('body').prepend(container);

    movieList = document.querySelector('.movies');

    inputSearch = document.querySelector('#search');

};


const createStyle = () =>{
    const headStyle = document.createElement('style');
    headStyle.innerHTML = `
    *{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        font-family: Arial, serif;
    }
    
    .container{
        padding: 20px;
        margin: 0 auto;
        max-width: 1280px;
    }
    .movies{
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    .movie{
        display: flex;
        align-content: center;
        justify-content: center;
    }
    
    .movie__image{
        width: 100%;
        object-fit: cover;
    }
    .search{
        margin-bottom: 30px;
    }
    
    .search__label-input{
        margin-bottom: 7px;
        display: block;
    }
    .search__input{
        padding: 10px 15px;
        display: block;
        width: 400px;
        margin-bottom: 10px;
        border: 2px solid black;
        border-radius: 7px;
    }
    .search__label-checkox{
        font-size: 12px;
        margin-top: -17px;
        margin-left: 25px;
        display: block;
    }
     ` ;

     document.querySelector('head').appendChild(headStyle);

};

const addMovieToList = (movie) =>{

    const item = document.createElement('div');
    const img = document.createElement('img');

    img.src = movie.Poster;
    img.classList.add('movie__image');

    item.classList.add('movie');
    item.appendChild(img);
    movieList.appendChild(item);
};


const clearMoviesMarkup = () =>{
    movieList && (movieList.innerHTML = ' ');
};



const delay = (() => {
    let timer = 0;

    return (callback, ms) =>{
        clearTimeout(timer);
        timer = setInterval(callback, ms);
    }
})();


createStyle();
createMarkup();
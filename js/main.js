let searchBtn = document.getElementById('searchBtn');
let searchInput = document.getElementById('search');
let trendingCtn = document.getElementsByClassName('gifos-trending')[0];
let buscadorCtn = document.getElementById('buscadorCtn');
let gifostrending = [];
/**
 * tendencia  de gifos
 * @param limit ::  limite de elementos
 */
const trending = (limit) => {
    let url = `${BASE_URL}trending?api_key=${api_key}&limit=${limit}`;
    let result = apiFetchGET(url);
    result.then((resp) => {
        trendingCtn.innerHTML = "";
        resp.data.map(item => {
            addToDOMtrending(item);
        })
    }).catch((e) => {
        console.log("Ha ocurrido un error" + e);
    })
}

/**
 *   Buscar un gif
 * @param term ::  termino de busqueda
 */
const searchGif = (term) => {
    let url = `${BASE_URL}search?q=${term}&api_key=${api_key}`;
    let result = apiFetchGET(url);
    result.then((resp) => {
        console.log("llamado a buscar gifos");
        buscadorCtn.innerHTML = "";
        resp.data.map(item => {
            addToDOMsearch(item);
        })
    }).catch((e) => {
        console.log("Ha ocurrido un error" + e);
    })
}
/**
 * agrega dinamicamente los elementos al html
 * @param info
 */
const addToDOMtrending = (info) => {
    console.log(info);
    let divCarContainer = document.createElement('div');
    //divCarContainer.classList.add('card');//
   // divCarContainer.style = 'width: 18rem;';//

    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src', info.images.original.url);
    divCarContainer.appendChild(img);
    trendingCtn.appendChild(divCarContainer);
}
const addToDOMsearch = (info) => {
    console.log(info);
    let divCarContainer = document.createElement('div');
    //divCarContainer.classList.add('card');//
   // divCarContainer.style = 'width: 18rem;';//

    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src', info.images.downsized_medium.url);
    divCarContainer.appendChild(img);
    buscadorCtn.appendChild(divCarContainer);
}
const gifos = (limit) => {
    let url = `${BASE_URL}trending?api_key=${api}&limit=${limit}`;
    let result = apiFetchGET(url);
    result.then((resp)=>{
        resp.map(element =>{
            addToDOM(element);
            gifos.push(element);
        })
  
    }).catch((e) =>{
        alert('Ocurrió un error' + e);
    })
}


searchInput.addEventListener('keyup', () => {
    if (event.which === 13 || event.keyCode == 13) {
        searchGif(searchInput.value);
    }
});

searchBtn.addEventListener('click', () => {
    searchGif(searchInput.value);
});


trending(4);


function gifostrending (url){
    fetch(url)
    .then(response => response.json())
        .then(json => {
            console.log(json);
            for(let i = 0; i<=json.data.length; i++){
                console.log(json.data[i].title);
            }
           
        }).catch(err => {
        console.error('fetch failed', err);
    });
}

gifostrending("http://api.giphy.com/v1/gifs/trending?api_key=IefDyeDjFahG86voHZqg7vNrBw5p1MwQ")

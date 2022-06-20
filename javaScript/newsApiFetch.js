console.log("newsapifetch is connected to html.")

function getNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bcd9b116cc3e4c4db6b83a23568c2c58`;
    fetch(url).then((response) => { return response.json() }).then((data) => { console.log(data) });
}

getNews();
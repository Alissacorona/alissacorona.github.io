const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=57c6f64b2f9ae9242a51f86539052cf5";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('temp_max').textContent = Math.round(jsObject.main.temp_max);
    document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);
    document.getElementById('wind').textContent = Math.round(jsObject.main.wind);
    document.getElementById('speed').textContent = Math.round(jsObject.wind.speed);
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
  });
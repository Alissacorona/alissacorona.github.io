const apiURL = "http://api.openweathermap.org/data/2.5/weather?id= lat=42.0380399&lon=-111.4048681&units=imperial&appid=57c6f64b2f9ae9242a51f86539052cf5";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('temp_max').textContent = Math.round(jsObject.main.temp_max);
    document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);
    document.getElementById('wind').textContent = Math.round(jsObject.main.wind);
    document.getElementById('speed').textContent = Math.round(jsObject.wind.speed);
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
  });
 
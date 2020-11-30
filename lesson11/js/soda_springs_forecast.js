const apiURLforecast = "http://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=57c6f64b2f9ae9242a51f86539052cf5";
fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
        const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
        let day = 1
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        forecast.forEach(x => {
            const d = new Date(x.dt_txt);
            const imagesrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
            document.getElementById(`dayofweek${day}`).textContent = weekdays[d.getDay()];
            document.getElementById(`temp${day}`).textContent = Math.round(x.main.temp)
            day++
        });

    });
const apiURLforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=2b7568d348474360f18370d64df7ac87";
fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
        const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
        let day = 1
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        forecast.forEach(x => {
            const d = new Date(x.dt_txt);
            document.getElementById(`dayofweek${day}`).textContent = weekdays[d.getDay()];
            document.getElementById(`temp${day}`).textContent = Math.round(x.main.temp)
            day++
        });

    });
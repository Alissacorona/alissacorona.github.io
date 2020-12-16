const requestURL = 'https://alissacorona.github.io/Scoots/data/rental.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
        let towns = jsonObject['towns'];
        towns = towns.filter(town => (town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven"))
        towns.forEach(town => {
            
            let card = document.createElement('section');
            let sect = document.createElement('section')
            let h1 = document.createElement('h1');
            let motto = document.createElement('h4');
            let yearfounded = document.createElement('p');
            let population = document.createElement('p');
            let rain = document.createElement('p');
            let image = document.createElement('img');

            h1.textContent = town.name;
            motto.textContent = town.motto;
            yearfounded.textContent = `Year Founded: ${town.yearFounded}`;
            population.textContent = `Population: ${town.currentPopulation}`;
            rain.textContent = `Average Rainfall: ${town.averageRainfall}`;
            image.setAttribute('src', `images/${town.photo}`);
            image.setAttribute('alt',  `Photo of ${town.name}, Idaho`);

            sect.appendChild(h1);
            sect.appendChild(motto);
            sect.appendChild(rain);
            sect.appendChild(yearfounded);
            sect.appendChild(population);
            card.appendChild(sect);
            card.appendChild(image);
            card.setAttribute("class", "card");
            sect.setAttribute("class", "cardData");
            document.querySelector('div.cards').appendChild(card);
        });

        
    });

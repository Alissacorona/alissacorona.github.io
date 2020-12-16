const requestURL = 'https://alissacorona.github.io/Scoots/data/rental.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);


        const prophets = jsonObject['rentals'];
        for (let i = 0; i < rentals.length; i++) {
          let card = document.createElement('section');
        let h2 = document.createElement('h2');

        h2.textContent = rentals[i].Type;

        card.appendChild(h2);

            document.querySelector('div.cards').appendChild(card);
            let max = document.createElement('p');
            let rh = document.createElement('p');
            let rf = document.createElement('p');
            let wh = document.createElement('p');
            let wf = document.createElement('p');
            let image = document.createElement('img');

        
            max.textContent = "Max. Persons " + rentals[i].Max. Persons;
            rh.textContent = "Reservation: Half Day (3 hrs) " + rentals[i].Reservation: Half Day (3 hrs);
            rf.textContent = "Reservation: Full Day" + rentals[i].Reservation: Full Day;
            wh.textContent = "Walk-In:  Half Day (3 hrs) " + rentals[i]. Walk-In:  Half Day (3 hrs);
            wf.textContent = "Walk-In: Full Day " + rentals[i].Walk-In: Full Day;
            image.setAttribute('src', rentals[i].imageurl);
            image.setAttribute('alt', (rentals[i].Type));

            
            card.appendChild(dob);
            card.appendChild(bp);
            card.appendChild(image);
            card.setAttribute("class", "card")
            document.querySelector('div.cards').appendChild(card);
        }

        
    });
const requestURL = 'https://alissacorona.github.io/Scoots/data/rental.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        let rentals = jsonObject['rentals'];
        rentals = rental.filter(rental => (rental.type == "Honda Metro Scooter" || rental.type == "Honda Dio Scooter" || rental.type == "Honda PCX150 Scooter" || rental.type == "Honda Pioneer ATV" || rental.type == "Jeep Wrangler - 4 door with a/c" || rental.type == "Jeep Wrangler - 2 door"))
        rentals.forEach(rental => {
            
            let card = document.createElement('section');
            let sect = document.createElement('section')
            let h1 = document.createElement('h1');
            let ReservationHalfDayThreeHours = document.createElement('h4');
            let ReservationFullDay = document.createElement('h4')
            let WalkInHalfDayThreeHours = document.createElement('h4');;
            let WalkInFullDay = document.createElement('h4');
        

            h1.textContent = rental.name;
            ReservationHalfDayThreeHours.textContent = `Reservation: Half Day (3hrs) ${rental.ReservationHalfDayThreeHours}`;
            ReservationFullDay.textContent = `Reservation: Full Day ${rental.ReservationFullDay}`;
            WalkInHalfDayThreeHours.textContent = `Walk-In: Half Day (3hrs) ${rental.WalkInHalfDayThreeHours}`;
            WalkInFullDay.textContent = `Walk-In: Full Day ${rental.WalkInFullDay}`;
           
            sect.appendChild(h1);
            sect.appendChild(ReservationHalfDayThreeHours);
            sect.appendChild(ReservationFullDay);
            sect.appendChild(WalkInHalfDayThreeHours);
            sect.appendChild(WalkInFullDay);
            
            card.appendChild(sect);
            
            card.setAttribute("class", "card");
            sect.setAttribute("class", "cardData");
            document.querySelector('div.cards').appendChild(card);
        });
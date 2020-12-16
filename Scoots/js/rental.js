const requestURL = 'https://alissacorona.github.io/Scoots/data/rental.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); {
      const prophets = jsonObject['rentals'];
        for (let i = 0; i < rentals.length; i++) {

          let card = document.createElement('section');
        let h2 = document.createElement('h2');
            
            let card = document.createElement('section');
            let sect = document.createElement('section')
            let h1 = document.createElement('h1');
            let ReservationHalfDayThreeHours = document.createElement('h4');
            let ReservationFullDay = document.createElement('h4')
            let WalkInHalfDayThreeHours = document.createElement('h4');;
            let WalkInFullDay = document.createElement('h4');
        

            h1.textContent = rental.name;
            ReservationHalfDayThreeHours.textContent = "Reservation: Half Day (3hrs)"  + rentals[i].ReservationHalfDayThreeHours;
            ReservationFullDay.textContent = "Reservation: Full Day" + rentals[i].ReservationFullDay;
            WalkInHalfDayThreeHours.textContent = "Walk-In: Half Day (3hrs)" + rentals[i].WalkInHalfDayThreeHours;
            WalkInFullDay.textContent = "Walk-In: Full Day" + rentals[i]. WalkInFullDay.textContent;
           
            sect.appendChild(h1);
            sect.appendChild(ReservationHalfDayThreeHours);
            sect.appendChild(ReservationFullDay);
            sect.appendChild(WalkInHalfDayThreeHours);
            sect.appendChild(WalkInFullDay);
            
     
            card.setAttribute("class", "card");
            sect.setAttribute("class", "cardData");
            document.querySelector('div.cards').appendChild(card);
        });
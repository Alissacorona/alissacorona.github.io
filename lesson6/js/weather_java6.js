 var dayOfWeek = new Date().getDay() 
      if (dayOfWeek == 6) {
document.getElementById("big-banner").style.display = "block";
      }
    const hambutton = document.querySelector('.ham');
        const mainnav = document.querySelector('.navigation')
        
        hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
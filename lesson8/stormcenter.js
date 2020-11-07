var dayOfWeek = new Date().getDay() 
      if (dayOfWeek == 6) {
document.getElementById("big-banner").style.display = "block";
}
    const hambutton = document.querySelector('.ham');
        const mainnav = document.querySelector('.navigation')
        
        hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
        </script>
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js">
        WebFont.load({
  google: {
    families: [
       'fontfamilynameofyourchoice'
    ]
  }
});
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

WebFont.load({
    google: {
      families: [
         'fontfamilynameofyourchoice'
      ]
    }
  });
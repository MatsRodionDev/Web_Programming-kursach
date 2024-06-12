class MainPage {
    start() {
      document.querySelector('.burger').addEventListener('click', this.toggleBurger);
      document.querySelector('.burger_menu').addEventListener('click', this.hideBurger);
      document.querySelector('.burger_line').parentElement.addEventListener('click', this.toggleBurger);
    }
    hideBurger(event) {
        if (event.target.closest('li')) {
            document.querySelector('.burger_menu').classList.remove('opened');
            document.querySelector('.burger').classList.remove('burgeroff');
            document.body.classList.remove('noscroll');
        }
    }
    toggleBurger(event) {
        event.target.classList.toggle('burgeroff');
        document.querySelector('.burger_menu').classList.toggle('opened');
        document.body.classList.toggle('noscroll');
    }
  }
  
  const mainPage = new MainPage();
  mainPage.start();
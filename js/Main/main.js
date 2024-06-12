addEventListener('load', function(){
    const theme = localStorage.getItem('Theme');

    if(theme == null)
        {
            localStorage.setItem('Theme', '');
        }
})
const links = document.querySelectorAll('a');

// Добавляем обработчик события click на каждую ссылку
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    scrollToElement(event.target.getAttribute('href')); // Вызываем функцию плавного перехода
  });
});

function scrollToElement(selector) {
  const targetElement = document.querySelector(selector);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
 function explore(){
    const select = document.querySelector('select');
    let lang = select.value;
    window.location.href = '../../html/Explore/explore.html#' + lang
  }
  
  function Booking(){
    const select = document.querySelector('select');
    let lang = select.value;
    window.location.href = '../../html/Booking/booking.html#' + lang
  }


    
const switchMode = document.querySelector('.switchMode').addEventListener('click', function(){
  let theme = document.getElementById('theme')

  

  if(theme.getAttribute('href') == '../../css/Main/main.css')
  {
    theme.href = '../../css/Main/mainDark.css'
    localStorage.setItem('Theme', 'black');
  }
  else{
    theme.href = '../../css/Main/main.css'  
    localStorage.setItem('Theme', '');
  }
})

addEventListener('load', function(){
  const Theme = localStorage.getItem('Theme')

  
  if(Theme == null) ocalStorage.setItem('Theme', '');
    let theme = document.getElementById('theme')

    console.log(Theme)
    console

    if(Theme.length != 0)
    {
      theme.href = '../../css/Main/mainDark.css'
        
    }
    else{
      theme.href = '../../css/Main/main.css'    
    }
  
  
  
})





addEventListener('load',function(){
  
    if(localStorage.getItem('AuthorizedUser') == null)
    {
        localStorage.setItem('AuthorizedUser', '');
    }

    const user = localStorage.getItem('AuthorizedUser')

    if(user.length > 0) 
    {
        reg()
    }
    else{
        unreg();
    }
})

function reg()
{
  
  document.querySelector('.logButt').classList.add('hidden-reg')
  document.getElementById('reg-butt').classList.add('hidden-reg')
  document.querySelector('.log-out').classList.remove('hidden-reg')
  // document.querySelector('.Registration').classList.add('hidden-reg')
  document.querySelector('.offers').classList.remove('hidden-reg')
  document.querySelector('.blog').classList.remove('hidden-reg')
  document.querySelector('.Authorization').classList.add('hidden2')
  document.querySelector('.l-account-butt').classList.remove('hidden-reg')
}

function unreg()
{
  document.querySelector('.logButt').classList.remove('hidden-reg')
  document.getElementById('reg-butt').classList.remove('hidden-reg')
  document.querySelector('.log-out').classList.add('hidden-reg')
  document.querySelector('.Registration').classList.remove('hidden-reg')
  document.querySelector('.offers').classList.add('hidden-reg')
  document.querySelector('.blog').classList.add('hidden-reg')
  document.querySelector('.l-account-butt').classList.add('hidden-reg')
}


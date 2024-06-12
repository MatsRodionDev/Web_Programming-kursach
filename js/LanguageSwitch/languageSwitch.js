const select = document.querySelector('select');
const allLang = ['ru', 'en']

select.addEventListener('change', changeUrlLanguage)

function changeUrlLanguage()
{
  let lang = select.value;

  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage()
{
  let hash =  window.location.hash;
  hash = hash.substring(1);

  if(!allLang.includes(hash))
    {
      location.href = window.location.pathname + '#en';
      location.reload();
    }
  
  select.value = hash

    console.log(langArr )
    console.log('swkwsvk')

  for(let key in langArr)
    {
      console.log(document.querySelector('.l-' + key))
      console.log(langArr[key][hash])
      if(document.querySelector('.l-' + key) == null) continue; 
      document.querySelector('.l-' + key).innerHTML = langArr[key][hash];
    }
}

changeLanguage();


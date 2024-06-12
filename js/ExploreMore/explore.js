window.addEventListener('load', function() {
    const user = localStorage.getItem('AuthorizedUser')
    console.log()
    if(user.length > 0)
    {
        reg()
    }
    else{
        unreg()
    }

    const Theme = localStorage.getItem('Theme')
    let theme = document.getElementById('theme')

    console.log(Theme)
    console

    if(Theme.length != 0)
    {
        theme.href = '../../css/Explore/exploreDark.css'
        
    }
    else{
        theme.href = '../../css/Explore/explore.css'
        
    }
});


document.querySelector('.back').addEventListener('click', function(){
    
        let lang = select.value;
        window.location.href = '../../html/Main/index.html#'+lang;
})







const switchMode = document.querySelector('.switchMode').addEventListener('click', function(){
    let theme = document.getElementById('theme')
  
    if(theme.getAttribute('href') == '../../css/Explore/explore.css')
    {
      theme.href =  '../../css/Explore/exploreDark.css'
      localStorage.setItem('Theme', 'black');
    }
    else{
      theme.href =  '../../css/Explore/explore.css'
      localStorage.setItem('Theme', '');
    }
  })



function reg()
{
  
  document.querySelector('.log-in2').classList.add('hidden2')
  document.querySelector('.reg2').classList.add('hidden2')
  document.querySelector('.log-out2').classList.remove('hidden2')
  document.querySelector('.Authorization').classList.add('hidden2')
  document.querySelector('.account-butt').classList.remove('hidden2')
  document.querySelector('.offers').classList.remove('hidden2')
}

function unreg()
{
  document.querySelector('.log-in2').classList.remove('hidden2')
  document.querySelector('.reg2').classList.remove('hidden2')
  document.querySelector('.log-out2').classList.add('hidden2')
  document.querySelector('.account-butt').classList.add('hidden2')
  document.querySelector('.offers').classList.add('hidden2')
}
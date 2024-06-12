
addEventListener('load', function(){
    const authButt = document.querySelector('.button-auth').addEventListener('click',authorization)
    document.querySelector('.log-in2').addEventListener('click', function()
    {
      
        document.querySelector('.Authorization').classList.remove('hidden2')
        document.querySelector('body').classList.add('locked')
    })
    
    document.querySelector('.btn-close3').addEventListener('click', function()
    {
        
        document.querySelector('.Authorization').classList.add('hidden2')
        document.querySelector('body').classList.remove('locked')
    })
    document.querySelector('.account-butt').addEventListener('click', function()
    {
      
        document.querySelector('.account').classList.remove('hidden2')
        document.querySelector('body').classList.add('locked')
    })
    
    document.querySelector('.btn-close').addEventListener('click', function()
    {
        document.querySelector('.account').classList.add('hidden2')
        document.querySelector('body').classList.remove('locked')
    })

    const logOut = document.querySelector('.log-out');
    logOut.addEventListener('click',function()
    {
        localStorage.setItem('AuthorizedUser', '');
        unreg();
    });
})

function authorization()
{
    
    const authName = document.querySelector('.auth-input-name').value;
    const authPass = document.querySelector('.auth-input-pass').value;
    console.log(authName)
    
    const nickname = localStorage.getItem(authName);
    console.log(nickname)
    if ( nickname !== null ) 
    {
        const user = JSON.parse(nickname);
        console.log(user.pass == authPass)
        if(user.pass == authPass)
        {
            document.querySelector('body').classList.remove('locked')
            localStorage.setItem('AuthorizedUser', JSON.stringify(user));
            reg()
            userAcc()
        }
    }
}






addEventListener('load', userAcc)
function userAcc()
{
    const user = localStorage.getItem('AuthorizedUser')
    
        if(user.length > 0)
        {
            let auser = JSON.parse(user)
            console.log(auser)
            let string;

            let k = 0;
            for(let key in auser)
            {                    
                if (k == 0) 
                {
                    string = '<h3>' + key + ': ' + auser[key];
                    k++
                    continue
                }
                string = '<h3>' + key + ': ' + auser[key] + '</h3>' + string
                k++
                    
            }
            document.querySelector('.account-window-info').innerHTML = string;
                
        }
}


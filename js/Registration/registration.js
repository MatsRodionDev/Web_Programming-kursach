let submitBtn = null;
let inputs = null;

var actPhone = false;
var actBirth = false;
var actPass = false;
var actFirstname= false;
var actLastname = false;
var actNickname = false;
var actEmail = false;

addEventListener('load', function(){
    inputs = document.getElementsByClassName('input-reg');
      for(let i = 0; i < inputs.length;i++)
        {
          inputs[i].addEventListener('input', validateFields);
        }
      
      
      submitBtn = document.getElementById('registerButton');
      const generateNicknameO = document.getElementById('generate-nickname'); 
      const generatePasswordO = document.getElementById('generate-password'); 
      // telInput.addEventListener('input', validateFields);
      // emailInput.addEventListener('input', validateFields);
      // dateOfBirth.addEventListener('input', validateFields);
  
      submitBtn.addEventListener('click', handleSubmit);
      generateNicknameO.addEventListener('click', generateNickname);
      generatePasswordO.addEventListener('click', generatePassword);

      document.querySelector('.reg2').addEventListener('click', function()
      {
        
          document.querySelector('.Registration').classList.remove('hidden2')
          document.querySelector('body').classList.add('locked')
      })
      
      document.querySelector('.btn-close2').addEventListener('click', function()
      {
          
          document.querySelector('.Registration').classList.add('hidden2')
          document.querySelector('body').classList.remove('locked')
      })
      
      document.querySelector('.btn-close4').addEventListener('click', function(){
          document.querySelector('.modal').classList.add('hidden2')
          document.querySelector('.Registration').classList.remove('hidden2')
        //   document.querySelector('body').classList.remove('locked')
        })
        document.querySelector('.modalOpen').addEventListener('click', function(){
          document.querySelector('.modal').classList.remove('hidden2')
          document.querySelector('.Registration').classList.add('hidden2')
        //   document.querySelector('body').classList.add('locked')
        })
})
    
  function validateTelephone() {
    
    const error = document.getElementById('error-telephone')  
    const telephone = document.getElementById('telephone-reg').value;
    if( telephone == '' && !actPhone)
      {
        return false;
      }
    actPhone = true;
    const phoneRegex = /^(\+375|80)(25|29|33|44)\d{7}$/;
    if(telephone == '')
      {
        error.textContent = 'this field is required'
        return false;
      }
    if(!phoneRegex.test(telephone))
      {
        
        error.textContent  = 'incorrectly entered phone number';
        return false;
      }
      error.textContent = '';
    
    return true;
  }

  

  function validateEmail(){
    
    const error = document.getElementById('error-email') 
    const email = document.getElementById('email-reg').value;
    if( email == '' && !actEmail)
      {
        return false;
      }
      actEmail = true;
    const Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email == '')
      {
        error.textContent = 'this field is required'
        return false;
      }
    if(!Regex.test(email))
      {
        error.textContent  = 'incorrectly entered email';
        return false;
      }
      error.textContent = '';
    return true;
  }

  function validateDate()
  {
    const error = document.getElementById('error-date') 
    const dateOfBirth = document.getElementById('date-of-birth').value;
    if( dateOfBirth == '' && !actBirth)
      {
        return false;
      }
      actBirth = true;
    const Regex = /^(\d{2})\s(\d{2})\s(\d{4})$/;
    if(dateOfBirth == '')
      {
        error.textContent = 'this field is required'
        return false;
      }
    if(!Regex.test(dateOfBirth))
      {
        error.textContent  = 'incorrectly entered date';
        return false;
      }
      
    let resultArray = dateOfBirth.split(" ");
    if( new Date().getFullYear() - +resultArray[2] < 16)
      {
        error.textContent  = 'your age must be over 16 years old';
        return false;
      }
      error.textContent = '';
    return true;
  }

  function validatePass(){
    const error = document.getElementById('error-pass') 
    const pass = document.getElementById('password-reg').value;
    if( pass == '' && !actPass)
      {
        return false;
      }
      actPass = true;
    const Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if(pass == '')
      {
        error.textContent = 'this fields are required'
        return false;
      }
    if(!Regex.test(pass))
      {
        error.textContent  = 'incorrectly entered pass';
        return false
      }
    
    if(pass != document.getElementById('confirm-password-reg').value)
      {
        error.textContent  = 'The password does not match the confirmation password';
        return false;
      }
      error.textContent = '';
    return true;
  } 

  // function validateFullname()
  // {
  //   const error1 = document.getElementById('error-first-name') 
  //   const error2 = document.getElementById('error-last-name') 
  //   const fn = document.getElementById('first-name-reg').value;
  //   const ln = document.getElementById('last-name-reg').value;
  //   const Regex = /^[а-яА-Я]{4,}$/;
  //   if(fn == '')
  //     {
  //         if(ln == '' && actLastname)
  //         {
            
  //           error2.textContent = 'this field is required'
  //           console.log(error2.value)
  //         }
  //         if(ln !== ''){
  //           actLastname = true;
  //         }
  //         if(actFirstname)
  //           {

  //             error1.textContent = 'this field is required'
  //           }
  //       return false;
  //     }
  //     if(ln == '')
  //       {
  //         if(actLastname)
  //           {
  //             error2.textContent = 'this field is required'
  //           }
  //         return false;
  //       }
  //       actFirstname = true;
  //     error1.textContent = '';
  //     error2.textContent = '';
  //   if(!Regex.test(fn) )
  //     {
  //       if(!Regex.test(ln))
  //         {
  //           error2.textContent  = 'The last name must contain only letters of the Russian alphabet'; 
  //         }
  //       error1.textContent  = 'The first name must contain only letters of the Russian alphabet';  
  //       return false;
  //     }
  //     error1.textContent = '';
  //     error2.textContent = '';
  //   if(!Regex.test(ln))
  //     {
  //       error1.taxtContent = '';
  //       error2.textContent  = 'The last name must contain only letters of the Russian alphabet'; 
  //       return false;
  //     }
  //     error1.textContent = '';
  //     error2.textContent = '';
  //     return true;
  // }

  function validateLastname()
  {

    const error = document.getElementById('error-last-name') 
    
    const ln = document.getElementById('last-name-reg').value;
    
    const Regex = /^[а-яА-Я]{4,}$/;

    if(ln == '' && !actLastname)
      {
        return false;
      }
      actLastname = true;

      
    if(ln == '')
      {
        error.textContent = 'this field is required'
        return false;
      }

      if(!Regex.test(ln))
        {
          error.textContent  = 'incorrectly entered nickname';
          return false;
        }
        error.textContent = '';
        return true;
  }

  function validateFirstname()
  {
    const error = document.getElementById('error-first-name') 
    
    const fn = document.getElementById('first-name-reg').value;
    
    const Regex = /^[а-яА-Я]{4,}$/;

    if(fn == '' && !actFirstname)
      {
        return false;
      }
      actFirstname = true;

      
    if(fn == '')
      {
        error.textContent = 'this field is required'
        return false;
      }

      if(!Regex.test(fn))
        {
          error.textContent  = 'incorrectly entered nickname';
          return false;
        }
        error.textContent = '';
        return true;
  }

  function validateNickname()
  {
    const error = document.getElementById('error-nickname') 
    const nickname = document.getElementById('nickname-reg').value;
    if(nickname == '' && !actNickname)
      {
        return false;
      }
      actNickname = true;
    const Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if(nickname == '')
      {
        error.textContent = 'this field is required'
        return false;
      }
    if(!Regex.test(nickname))
      {
        error.textContent  = 'incorrectly entered nickname';
        return false;
      }
    if (localStorage.getItem(nickname) !== null)
      {
        error.textContent  = 'this nickname already exists';
        return false; 
      }
      error.textContent = '';
    return true;
  }

  

  var n = 0;

  function generateNickname() {
        // Логика генерации уникального никнейма
        n++;
        if(n >= 5) return;
        const length = Math.floor(Math.random() * (20 - 8 + 1)) + 8; // Случайная длина от 8 до 20 символов
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$!%*?&';
        var nickname = '';

        // Проверяем, чтобы пароль соответствовал регулярному выражению
        do {
          nickname = '';
          for (let i = 0; i < length; i++) {
            nickname += charset[Math.floor(Math.random() * charset.length)];
          }
        } while (
          !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(nickname))
        );
        document.getElementById('nickname-reg').value = nickname;
        
    }

    k = 0;

    function generatePassword() {
      // Логика генерации уникального никнейма
      k++;
      if(k >= 5) return;
      const length = Math.floor(Math.random() * (20 - 8 + 1)) + 8; // Случайная длина от 8 до 20 символов
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$!%*?&';
      var nickname = '';

      // Проверяем, чтобы пароль соответствовал регулярному выражению
      do {
        nickname = '';
        for (let i = 0; i < length; i++) {
          nickname += charset[Math.floor(Math.random() * charset.length)];
        }
      } while (
        !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(nickname))
      );
      document.getElementById('password-reg').value = nickname;
      document.getElementById('confirm-password-reg').value = nickname;
  }

  var formIsValid = true;
 

  function validateFields() {
    // Проверка валидности полей
    
    if(!validateTelephone())
      {
        console.log('кек')
        formIsValid = false;
      }

    if(!validateEmail())
      {
        console.log('кек')
        formIsValid = false;
      }
    
    if(!validateDate())
      {
        console.log('кек')
        formIsValid = false;
      } 
    if(!validatePass())
      {
        
        formIsValid = false;
      }

    
    if(!validateFirstname())
      {
          
        formIsValid = false;
      }

    if(!validateLastname())
      {
            
        formIsValid = false;
      } 

    if(!validateNickname())
      {
        formIsValid = false;
      }

      const isChecked = document.querySelector('.check').checked;

      if (!isChecked) {
        formIsValid = false;
      } 
    
    // Управление состоянием кнопки
    if (formIsValid) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
      formIsValid = true;
    }
  }

  function handleSubmit() {
    
    // Проверка, что кнопка не заблокирована
    if (!submitBtn.disabled) {
      // Очистка полей
      n = 0;
      k = 0;
     const user = {
      telephone: inputs[0].value,
      email: inputs[1].value,
      date: inputs[2].value,
      pass: inputs[3].value,
      firstname: inputs[5].value,
      lastname: inputs[6].value,
      middlename: inputs[7].value,
      nickname: inputs[8].value,
     }
     localStorage.setItem(inputs[1].value, JSON.stringify(user));
      // Можно добавить здесь дополнительную логику для отправки формы
      localStorage.setItem('AuthorizedUser', JSON.stringify(user));
      reg();
      userAcc();
    }
  }


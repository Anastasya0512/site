let formReg = document.forms.formreg;
formreg.addEventListener('submit', function(event) {
    event.preventDefault();
formData = new FormData(formReg);
const values = [...formData.values()];
    console.log(values);
    if (formReg.RegistrationFormname.value == '') {
        Swal.fire(
            'Ошибка!',
            'Вы не ввели ваше имя!',
            'error'
        )
    }
    else {
        if (formReg.RegistrationFormemail.value == '') {
            Swal.fire(
                'Ошибка!',
                'Вы не ввели адрес электронной почты!',
                'error'
            );
        }
        else {
            if (formReg.RegistrationFormpassword.value == '') {
                Swal.fire(
                    'Ошибка!',
                    'Вы не ввели пароль!',
                    'error'
                );
            }
            else {   
                Swal.fire(
                    'УРА!',
                    'Вы наконец-то зарегистрировались!!!!!!!!!!!!!!!!!!!!',
                    'success'
                 );
                 formReg.reset();
                }
            }
        }
    });


(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
        
        var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        var alertTrigger = document.getElementById('liveAlertBtn')


// Formulario

const form = document.querySelector('#form');

const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const status = document.querySelector('#form-status');
    await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.classList.add('alert', 'alert-success');
        status.innerHTML = "Gracias por contactarte conmigo! Te escribire pronto..";
        form.reset()
    }).catch(error => {
        status.classList.add('alert', 'alert-danger');
        status.innerHTML = "Oops! Hubo un problema enviando tu mensaje!"
    });
}

form.addEventListener('submit', handleSubmit);

})()
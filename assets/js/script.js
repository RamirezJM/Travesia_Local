

const form = document.querySelector('.needs-validation');
const modalRespuesta = new bootstrap.Modal(document.querySelector('#modal-respuesta'));
const respuestaTitulo = document.querySelector('#modal-respuesta-titulo')
const respuestaImagen = document.querySelector('#modal-respuesta-imagen')
const respuestaMensaje = document.querySelector('#modal-respuesta-mensaje')


form.addEventListener('submit', async (ev) => { // Agregamos async
  ev.preventDefault();

  if (!form.checkValidity()) {
    ev.stopPropagation();
    form.classList.add('was-validated');
  } else {
    // Si es válido, enviamos los datos a Formspree
    const data = new FormData(form);
    console.log(data)

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }

    });

    if (response.ok) {
      respuestaTitulo.innerText = '¡Mensaje Enviado!'
      respuestaImagen.src = 'assets/images/iconos/respuesta-ok.svg'
      respuestaMensaje.innerText = 'Gracias por contactarnos. Nos comunicaremos contigo a la brevedad.'
      form.classList.remove('was-validated');
      form.reset();
    } else {
      respuestaTitulo.innerText = 'Ha ocurrido un error'
      respuestaImagen.src = 'assets/images/iconos/respuesta-error.svg'
      respuestaMensaje.innerText = 'No pudimos procesar tu solicitud. Por favor intenta nuevamente o contáctanos a través de nuestras redes sociales.'
      const responseData = await response.json();
      console.log(responseData);
      form.reset();
    }

  }
  modalRespuesta.show()
});
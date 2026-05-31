

const form = document.querySelector('.needs-validation');
const modalRespuesta = new bootstrap.Modal(document.querySelector('#modal-respuesta'));
const respuestaTitulo = document.querySelector('#modal-respuesta-titulo')
const respuestaImagen = document.querySelector('#modal-respuesta-imagen')
const respuestaMensaje = document.querySelector('#modal-respuesta-mensaje')
const lenguaje = document.documentElement.lang || 'es';


form.addEventListener('submit', async (ev) => {
  ev.preventDefault();

  if (!form.checkValidity()) {
    ev.stopPropagation();
    form.classList.add('was-validated');
  } else {
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
      if (lenguaje === 'es') {
        respuestaTitulo.innerText = '¡Mensaje Enviado!'
        respuestaImagen.src = '/assets/images/iconos/respuesta-ok.svg'
        respuestaMensaje.innerText = 'Gracias por contactarnos. Nos comunicaremos contigo a la brevedad.'
      }
      else {
        respuestaTitulo.innerText = '¡Message Sent!'
        respuestaImagen.src = '/assets/images/iconos/respuesta-ok.svg'
        respuestaMensaje.innerText = 'Thank you for reaching out. We will get back to you as soon as possible.'
      }
      form.classList.remove('was-validated');
      form.reset();
    } else {
      if (lenguaje === 'es') {
        respuestaTitulo.innerText = 'Ha ocurrido un error'
        respuestaImagen.src = '/assets/images/iconos/respuesta-error.svg'
        respuestaMensaje.innerText = 'No pudimos procesar tu solicitud. Por favor intenta nuevamente o contáctanos a través de nuestras redes sociales.'
      } else {
        respuestaTitulo.innerText = 'Something went wrong'
        respuestaImagen.src = '/assets/images/iconos/respuesta-error.svg'
        respuestaMensaje.innerText = "We couldn't send your message. Please try again or contact us through our social media platforms."
      }
       const responseData = await response.json();
       /* form.reset(); */
    }


    /* 
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
        } */

  }
  modalRespuesta.show()
});
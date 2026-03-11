/* script que valida el formulario */
/* 
const form = document.querySelector('.needs-validation');

form.addEventListener('submit', ev => {
  ev.preventDefault();

  if (!form.checkValidity()) {
    ev.stopPropagation();
    form.classList.add('was-validated');
    return
  } else {
    alert('Formulario enviado. Pronto nos comunicaremos contigo.');
    form.classList.remove('was-validated');
    form.reset();
  }
}); */

const form = document.querySelector('.needs-validation');

form.addEventListener('submit', async (ev) => { // Agregamos async
  ev.preventDefault();

  if (!form.checkValidity()) {
    ev.stopPropagation();
    form.classList.add('was-validated');
  } else {
    // Si es válido, enviamos los datos a Formspree
    const data = new FormData(form);
    
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert('¡Gracias! Pronto nos comunicaremos contigo.');
      form.classList.remove('was-validated');
      form.reset();
    } else {
      alert('Ups, hubo un problema al enviar. Inténtalo de nuevo.');
    }
  }
});
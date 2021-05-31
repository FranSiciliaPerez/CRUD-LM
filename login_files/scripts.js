const formulario = document.querySelector('.formulario');

const correo = document.querySelector('.correo input');
const correoInfo = document.querySelector('.correo input + .info');

const contrasena = document.querySelector('.contraseña input');
const contrasenaInfo = document.querySelector('.contraseña input + .info');

const confirmaContrasena = document.querySelector('.confirma-contraseña input');
const confirmaContrasenaInfo = document.querySelector('.confirma-confirma input + .info');

const submit = document.querySelector('[type="submit"]');


submit.addEventListener('click', ValidarFormulario)

formulario.addEventListener('keydown', DesmarcarErrores)


function ValidarFormulario() {

  if( !ValidarCorreo() ) {
    event.preventDefault();

    correo.classList.add('error')
    correoInfo.classList.add('error')
    return;
  }

  if( !ValidarContrasena() ) {
    event.preventDefault();

    contrasena.classList.add('error')
    contrasenaInfo.classList.add('error')
    return;
  }

  if( !ValidarConfirmaContrasena() ) {
    event.preventDefault();

    confirmaContrasena.classList.add('error')
    confirmaContrasenaInfo.classList.add('error')
    return;
  }

}


function DesmarcarErrores() {
  document.querySelectorAll('*').forEach(
    (element) => element.classList.remove('error')
  )
}


const criterioCorreo = /^[a-zñA-ZÑ1-9\.]+@[a-z1-9]+\.[a-z]{2,6}$/;

function ValidarCorreo() {
  return criterioCorreo.test(correo.value)
}


const criterioContrasena = /^(?=.*?[A-ZÑ])(?=.*?[a-zñ])(?=.*?[#&@!%$\-*]).{6,20}$/;

function ValidarContrasena() {
  return criterioContrasena.test(contrasena.value)
}

function ValidarConfirmaContrasena() {
  if( confirmaContrasena.value === contrasena.value ) {
    return true;
  } else {
    return false;
  }
}

window.onload = function() {

  // Input
  let nombre = document.getElementById('nombre');
  let apellido = document.getElementById('apellido');
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let telefono = document.getElementById('telefono');
  let direccion = document.getElementById('direccion');

  // Error message
  let nombreError = document.getElementById('nombreError');
  let apellidoError = document.getElementById('apellidoError');
  let emailError = document.getElementById('emailError');
  let passError = document.getElementById('passError');
  let telefonoError = document.getElementById('telefonoError');
  let direccionError = document.getElementById('direccionError');

  // Add event listeners
  //valid nomnbre
  nombre.addEventListener('blur', validateNombre);
  nombre.addEventListener('focus', clearNombreError);

  //valid apellido
  apellido.addEventListener('blur', validateApellido);
  apellido.addEventListener('focus', clearApellidoError);

  //valid email
  email.addEventListener('blur', validateEmail);
  email.addEventListener('focus', clearEmailError);

  //valid password
  password.addEventListener('blur', validatePassword);
  password.addEventListener('focus', clearPasswordError);
  
  //valid telefono
  telefono.addEventListener('blur', validateTelefono);
  telefono.addEventListener('focus', clearTelefonoError);

  //valid direccion
  direccion.addEventListener('blur', validateDireccion);
  direccion.addEventListener('focus', clearDireccionError);

  // Clear error function
  function clearNombreError(e) {
    console.log('clearNombreError',nombreError)
    nombreError.classList.add('hiddenError');
  }

  function clearApellidoError(e) {
    console.log('clearApellidoError')
    apellidoError.classList.add('hiddenError');
  }

  function clearEmailError(e) {
    console.log('clearEmailError')
    emailError.classList.add('hiddenError');
  }

  function clearPasswordError(e) {
    console.log('clearPasswordError')
    passError.classList.add('hiddenError');
  }

  function clearTelefonoError(e) {
    console.log('clearPasswordError')
    telefonoError.classList.add('hiddenError');
  }

  function clearDireccionError(e) {
    console.log('clearDireccionError')
    direccionError.classList.add('hiddenError');
  }

  // Validation function
  function validateNombre(e) {
    console.log('validateNombre', nombreError)
    if(nombre.value.length < 3) {
        nombreError.classList.remove('hiddenError');
    }
  }

  function validateApellido(e) {
    if(apellido.value.length < 3) {
      apellidoError.classList.remove('hiddenError');
     }
  }

  function validateEmail(e) {
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(email.value)) {
      emailError.classList.remove('hiddenError');
    } 
  }

  function validatePassword(e) {
    let passwordRegex = /^[0-9a-zA-Z]+$/;
    if (password.value.length < 8 || !passwordRegex.test(password.value)) {
      passError.classList.remove('hiddenError');
    } 
  }

  function validateTelefono(e) {
    let telefonoRegex =  /^\d{0,10}(\.\d{0,2})?$/;
    if (telefono.value.length < 7 || !telefonoRegex.test(telefono.value) || telefono.value.indexOf(' ') != -1 || telefono.value.indexOf('(') != -1 || telefono.value.indexOf(')') != -1 || telefono.value.indexOf('-') != -1){
      telefonoError.classList.remove( 'hiddenError');
    } 
  }

  function validateDireccion(e) {
    let direccionRegex = /^[A-Za-z0-9\s]+$/g;
    let cantEspacios = direccion.value.split(" ").length - 1
    if (direccion.value.length < 5 || !direccionRegex.test(direccion.value) || cantEspacios > 1) {
      console.log(cantEspacios)
      direccionError.classList.remove('hiddenError');
    } 
  } 
}
function validarEmail(){
  var email = document.querySelector('#email');
  var error = document.querySelector('#error-email');
  
  if(!email.checkValidity()){
    error.innerHTML = "Email invalido";  
  }
   
}

function redefinirMsgE(){
  var error = document.querySelector('#error-email');
  if (error.innerHTML == "Email invalido"){
    error.innerHTML = "";
  }
}

function validarNome(){
  var nome = document.querySelector('#nome');
  var error = document.querySelector('#error-nome');
  
    
  if(nome.length < 3){
    error.innerHTML = "Nome invalido";  
  }
   else if(nome.length > 100){
    error.innerHTML = "Nome invalido";  
  }
   
}

function redefinirMsg(){
  var error = document.querySelector('#nome-email');
  if (error.innerHTML == "Nome invalido"){
    error.innerHTML = "";
  }
}
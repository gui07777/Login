function logar(){
    var usuario = document.getElementById('Usuario').value;
    var senha = document.getElementById('Senha').value;

    if(usuario === 'admin' && senha === 'admin'){
        alert("LOgin realizado com sucesso");
        location.href = "./html/home.html";
    }else{
        alert("usuario ou senha invalidos");
    }
}
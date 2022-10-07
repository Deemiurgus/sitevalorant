var Bank = []
function Enviar(){
    let user = document.getElementById("Username").value
    let nome = document.getElementById("Nome").value
    let email = document.getElementById("Email").value
    let senha = document.getElementById("Senha").value
    let csenha = document.getElementById("CSenha").value

    let usuario = {
        User: user,
        Nome: nome,
        Email: email,
        Senha: senha,
        CSenha: csenha
    }
    Bank.push(usuario)
    console.log(Bank)
}

function login(){
    
let Name = document.getElementById('Name').value;
let Senha1 = document.getElementById('Senha').value;
    if((Name == "adm" || Name == "adm456" || Name == "adm@gmail.com") && Senha1 == "123"){
        alert("Logado!")   
        window.location.href ="/home.html"
    }
}
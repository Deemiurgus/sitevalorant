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
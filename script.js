function enviar() {

    let nome = document.querySelector("#nome")
    let senha = document.querySelector("#senha")
    let telefone = document.querySelector("#telefone")
    let assunto = document.querySelector("#assunto")

    console.log(nome.value)
    console.log(senha.value)
    console.log(telefone.value)
    console.log(assunto.value)

    if (nome.value == 0 || senha.value == 0 || telefone.value == 0 || assunto.value == 0) {
        alert("Algum campo não preenchido")
    } else {
        alert("Enviado!")
    }
}
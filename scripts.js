function enviar() {
    let email = document.querySelector("#input-email");
    let password = document.querySelector("#input-password");
    let text = document.querySelector("#input-text");
    let button = document.querySelector("#input-button");

    console.log(email.value)
    console.log(password.value)
    console.log(text.value)

    if (email.value == 0 || password.value == 0 || text.value == 0) {
        alert("Algum Campo vazio!")
    } else {
        alert("Enviado!")
    } 
}
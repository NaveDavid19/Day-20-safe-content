'use strict'

// function onInit() {

// }

function render(isUser, username) {
    if (!isUser) return
    const elSignIn = document.querySelector('.login')
    elSignIn.style.display = 'none'
    const elSecretContent = document.querySelector('.secret-content')
    const elWelcome = document.querySelector('.secret-content h3')
    elSecretContent.style.display = 'block'
    elWelcome.innerText = `welcome  ${username}`

}

function onLogIn() {
    const elUserName = document.querySelector('.user-name')
    const elPassword = document.querySelector('.password')
    const user = {
        username: elUserName.value,
        password: elPassword.value,
    }
    render(checkLogIn(user), user.username)
}
'use strict'

function onInit() {
    const elSignIn = document.querySelector('.login')
    elSignIn.style.display = 'block'
    const elSecretContent = document.querySelector('.secret-content')
    elSecretContent.style.display = 'none'
}

function render(isUser, username) {
    if (!isUser) return
    const elSignIn = document.querySelector('.login')
    elSignIn.style.display = 'none'

    const elSecretContent = document.querySelector('.secret-content')
    elSecretContent.style.display = 'block'

    const elWelcome = document.querySelector('.secret-content h3')
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
    elUserName.value = ''
    elPassword.value = ''
}

function onLogOut() {
    onInit()
    localStorage.clear()
}

function onAdmin() {

}
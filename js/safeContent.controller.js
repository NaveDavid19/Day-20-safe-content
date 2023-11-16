'use strict'

function onInit() {
    const elSignIn = document.querySelector('.login')
    elSignIn.style.display = 'block'
    const elSecretContent = document.querySelector('.secret-content')
    elSecretContent.style.display = 'none'
    var elAdmin = document.querySelector('.admin')
    elAdmin.style.display = 'none'
    var elTable = document.querySelector('table')
    elTable.style.display = 'none'

}

function render(isUser, username) {
    if (!isUser) return
    const elSignIn = document.querySelector('.login')
    elSignIn.style.display = 'none'
    var currUser = gUser.find(user => user.username === username)
    if (currUser.isAdmin) {
        var elAdmin = document.querySelector('.admin')
        elAdmin.style.display = 'block'
        // onAdmin()
        return
    }
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
    var elAdmin = document.querySelector('.admin')
    elAdmin.style.display = 'none'
    var elTable = document.querySelector('table')
    elTable.style.display = 'block'
    elTable.innerHTML += setAdminData()
    render()
}
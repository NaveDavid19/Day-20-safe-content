'use strict'

const gUser = {
    id: 'u101',
    username: 'puki',
    password: 'secret',
    lastLoginTime: 1601891998864,
    isAdmin: false
}

function checkLogIn(user) {
    return user.username === gUser.username && user.password === gUser.password

}
'use strict'

const gUser = [
    {
        id: 'u101',
        username: 'puki',
        password: 'secret',
        lastLoginTime: 1601891998864,
        isAdmin: false
    },
    {
        id: 'u102',
        username: 'nave',
        password: '1902',
        lastLoginTime: 1601891998863,
        isAdmin: true
    },
    {
        id: 'u103',
        username: 'hadar',
        password: 'hagever',
        lastLoginTime: 1601891998862,
        isAdmin: false
    }
]

function checkLogIn(enteredUser) {
    var currUser = gUser.find(user => user.username === enteredUser.username)
    if (!currUser) return
    if (currUser.password !== enteredUser.password) return
    saveToStorage('currUser', currUser)
    return enteredUser
}
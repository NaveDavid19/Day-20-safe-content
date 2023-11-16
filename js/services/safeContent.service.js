'use strict'

const gUser = [
    {
        id: makeId(),
        username: 'puki',
        password: 'secret',
        lastLoginTime: 1601891998864,
        isAdmin: false
    },
    {
        id: makeId(),
        username: 'nave',
        password: '1902',
        lastLoginTime: 1601891998864,
        isAdmin: true
    },
    {
        id: makeId(),
        username: 'hadar',
        password: 'hagever',
        lastLoginTime: 1601891998864,
        isAdmin: false
    }
]

function checkLogIn(enteredUser) {
    var currUser = gUser.find(user => user.username === enteredUser.username)
    if (!currUser) return
    if (currUser.password !== enteredUser.password) return
    currUser.lastLoginTime = getTime()
    saveToStorage('currUser', currUser)
    return enteredUser
}
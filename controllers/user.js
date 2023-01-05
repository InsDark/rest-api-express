const {response} = require('express')
const usersGet = (req, res = response) => {
    const query = req.query;
    res.json({
        msg: 'Hello World from get method',
        query
    })
}
const userPut = (req, res = response) => {
    const id = req.params.id
    res.json({
        msg: 'Hello World from put method',
        id
    })
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'Hello World from delete method'
    })
}

const userPost = (req, res = response) => {
    const body = req.body;
    res.json({
        msg: 'Hello World from post method',
        body
    })
}

module.exports = {
    usersGet,
    userDelete,
    userPost,
    userPut
}
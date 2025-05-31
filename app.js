require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

const githubData = {
    "login": "Faizan260118",
    "id": 122674879,
    "node_id": "U_kgDOB0_evw",
    "avatar_url": "https://avatars.githubusercontent.com/u/122674879?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Faizan260118",
    "html_url": "https://github.com/Faizan260118",
    "followers_url": "https://api.github.com/users/Faizan260118/followers",
    "following_url": "https://api.github.com/users/Faizan260118/following{/other_user}",
    "gists_url": "https://api.github.com/users/Faizan260118/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Faizan260118/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Faizan260118/subscriptions",
    "organizations_url": "https://api.github.com/users/Faizan260118/orgs",
    "repos_url": "https://api.github.com/users/Faizan260118/repos",
    "events_url": "https://api.github.com/users/Faizan260118/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Faizan260118/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Faizan  Ali",
    "company": null,
    "blog": "",
    "location": "Mumbai",
    "email": null,
    "hireable": null,
    "bio": "I'm a self-taught programmer learning backend development and AI, building web apps and APIs.\r\n\r\n\r\n\r\n\r\n\r\n",
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-01-14T11:20:02Z",
    "updated_at": "2025-05-26T07:22:14Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/linkedIn', (req, res) => {
    res.send('faizanali')
})

app.get('/docs', (req, res) => {
    res.send('Getting started')
})

app.get('/login', (req, res) => {
    res.send('login through google')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

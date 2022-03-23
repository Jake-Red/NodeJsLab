const path = require('path')
const fs = require('fs')
const requestpromise = require('request-promise')


requestpromise('https://reddit.com/r/popular.json')
.then(html =>{
    let posts = JSON.parse(html).data.children
    let postInfo = []

    posts.forEach((item)=> {
        let info = {
            title: item.data.title,
            url:item.data.url,
            OP: item.data.author
        }
        postInfo.push(info)
    })
    fs.writeFile('populararticles.json', JSON.stringify(postInfo), (err) => {
        if (err) console.log(err)
    })
})
.catch(err => {
    console.log(err)
})

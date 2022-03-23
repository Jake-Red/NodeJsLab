const path = require('path')
const fs = require('fs')

let chirpArray = [
{
    username: "HotDog1",
    content: "I'm food"
},
{
    username: "BurgerGuy",
    content: "I'm food too"
},
{
    username: "GuyFieri",
    content: "I'm going to eat you all"
},
{
    username: "Apple",
    content: "I'm food also"
},
{
    username: "BilliardBall",
    content: "I'm not food"
},
]

fs.writeFile('chirps.json', JSON.stringify(chirpArray), (err) => {
    if (err) console.log(err)
})

fs.readFile('chirps.json', (err, data) => {
    if (err) console.log(err)
    console.log(data.toString())
})
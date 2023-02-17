const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) =>{
    // lodash
    const num = _.random(0, 20)
    console.log(num)

    
    // set header content type

res.setHeader('Content-Type', 'text/html')

fs.readFile('./views/index.html', (err, data) => {
    if(err){
        console.log(err)
        res.end()
    } else {
        //res.write(data)
        res.end(data)
    }
})
})



server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})
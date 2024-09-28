const http = require('http')
const port = 27017
const fs = require('fs')

const Server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error,data){
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
            
        }
        res.end()
    })
    
})


Server.listen(port,function(error){
    if(error){
        console.log('something went wrong',error)
    }else{
        console.log('server is listening on port' + port)
    }
})
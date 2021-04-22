const http = require('http')

const httpserver = (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write(`
        <html>
            <head>
                <title>this is the f...ing world</title>
            </head>
            <body>
                <h1>Yeah! this is the world</h1>
            </body>
        </html>
    `)
    res.end()
}

const server = http.createServer(httpserver)

server.listen(3000, (_) => {
    console.log('well----- ----- ----- ----- ----- ----- ')
})

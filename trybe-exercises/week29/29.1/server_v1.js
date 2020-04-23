const http = require('http')

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        http.get(
            {
                hostname: 'localhost',
                port: '3000',
                path: '/',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: '12345678',
                },
            },
            (res) => {
                const data = []
                res.on('data', (chunk) => { data.push(chunk) })

                res.on('end', () => {
                    const parsedData = JSON.parse(data.join(''))

                    response.writeHead(200, 'OK', {
                        'Content-Type': 'application/json'
                    })

                    const responseBody = JSON.stringify(parsedData)
                    response.write(responseBody)
                    response.end()
                })
            }
        )
    }
})

server.listen(3001)
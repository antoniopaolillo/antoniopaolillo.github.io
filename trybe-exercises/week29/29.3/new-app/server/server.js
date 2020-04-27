import fs from 'fs'
import path from 'path'
import express from 'express'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../src/App.js'

const app = express()

const reactApp = ReactDOMServer.renderToString(<App />)

app.use('^/$', (req, res) => {
    fs.readFile(path.resolve(__dirname, '..', 'build', 'index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('Algo deu errado :/')
        }

        res.send(
            data.replace('<div id="root"></div>', `<div>${reactApp}</div>`)
        )
    })
})

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(3000, () => console.log('Escutando na porta 3000'))
import express from 'express'
import config from './config'
import apiRouter from './api'
const server = express()

server.use(express.static('public'))
server.use('/api', apiRouter)
server.set('view engine', 'ejs')

server.get('/', (req, res) => {
    res.render('index', {
        content: '...'
      });
});


server.listen(config.port, ()=> {
    console.info("Express listening on port ", config.port)
})
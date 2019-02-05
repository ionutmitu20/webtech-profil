const express = require("express")

const app = express()


app.use('/',express.static('Static'))

app.get('/hello',function(request, response){ 

    response.status(200).send('Hello '+request.query.name)
})

app.get('/messages', (request,response) => {
    response.status(500).send('Not implemented')
})

app.get('/messages/:id', (request,response) => {
    response.status(500).send('Not implemented')
    
})


app.post('/messages', (request,response) => {
    response.status(500).send('Not implemented')
    
})

app.put('/messages/:id', (request,response) => {
    response.status(500).send('Not implemented')
    
})


app.delete('/messages/:id', (request,response) => {
    response.status(500).send('Not implemented')
    
})



app.listen(8080)
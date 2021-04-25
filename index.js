const express = require('express')
const app = express()

var fecha= new Date();

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "21-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122"
  }
]

app.get('/',(request,response) => {
  response.send('<h1>Bienvenidos a mi pagina con NODEJS</h1>')
})

app.get('/info',(request,response) => {
  response.send('<h3> Phonebook has info for '+persons.length +' people</h3>'+
  '<h3>'+fecha+'</h3>')
})

app.get('/api/personas',(request,response) => {
  response.json(persons)
})


// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'application/json' })
//   response.end(JSON.stringify(persons))
// })

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
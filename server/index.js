const express = require('express')
const bookCtrl = require('./controllers/booksController')

const app = express()
const PORT = 4000

app.use(express.static(__dirname + '/../build'))
app.use(express.json())

app.get('/api/books', bookCtrl.getAllBooks)
app.post('/api/books', bookCtrl.createBook)
app.put('/api/books/:id', bookCtrl.updateBook)
app.delete('/api/books/:id', bookCtrl.deleteBook)

app.listen(PORT, () => console.log(`Get your kicks on route ${PORT}`))

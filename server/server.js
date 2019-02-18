const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')
const widgets = require('./widgets')

const app = express()

app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
  const help = `
  <pre>
    Welcome to the Widgets API!

    Use an Authorization header to work with your own data:

    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})

    The following endpoints are available:

    GET /widgets
    DELETE /widgets/:id
    POST /widgets { titleCard, options }
  </pre>
  `

  res.send(help)
})

app.use((req, res, next) => {
  const token = req.get('Authorization')

  if (token) {
    req.token = token
    next()
  } else {
    res.status(403).send({
      error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
    })
  }
})

app.get('/widgets', (req, res) => {
  res.send(widgets.get(req.token))
})

app.delete('/widgets/:id', (req, res) => {
  res.send(widgets.remove(req.token, req.params.id))
})

app.post('/widgets', bodyParser.json(), (req, res) => {
  const { titleCard, options } = req.body

  if (titleCard && options) {
    res.send(widgets.add(req.token, req.body))
  } else {
    res.status(403).send({
      error: 'Please provide both a titleCard and options'
    })
  }
})

app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port)
})

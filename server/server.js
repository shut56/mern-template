import express from 'express'

const server = express()
const PORT = 8080

server.get('/', (req, res) => {
  res.send('Express Server')
})

server.listen(PORT, () => {
  console.log(`Serving at http://localhost:${PORT}`)
})

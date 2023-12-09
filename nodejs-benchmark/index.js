const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => { res.send('Hello World!') })
.get('/calculate/:id', (req, res) => {
  const n = Number(req.params.id)
  if (typeof n === "undefined" || isNaN(n)) {res.end("not a number"); return}
  let result = 0
  for (let i = 0; i < n; i++) result = result + i
  res.end(`${result}`)
})
app.listen(port, ()=>{console.log(`app is listening on port: ${port}`)})


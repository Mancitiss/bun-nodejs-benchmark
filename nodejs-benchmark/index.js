const express = require('express')
const app = express()
const port = 3001


const calculate = (n) => { if (n <= 0) return 0; return n + calculate(n - 1) }

app.get('/', (req, res) => { res.send('Hello World!') })
.get('/calculate/:id', (req, res) => {
  const n = Number(req.params.id)
  if (typeof n === "undefined" || isNaN(n)) {res.send("not a number"); return}
  let result = 0
  for (let i = 0; i < n; i++) result = result + i
  res.send(`${result}`)
})
.get('/calculate2/:id', (req, res) => {
  const n = Number(req.params.id)
  if (typeof n === "undefined" || isNaN(n)) {res.send("not a number"); return}
  res.send(`${calculate(n)}`)
})
app.listen(port, ()=>{console.log(`app is listening on port: ${port}`)})


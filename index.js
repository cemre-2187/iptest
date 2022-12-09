const express = require('express')
const app = express()
const port = 8050


app.get('/', (req, res) => {
  res.send({ ipheader: req.headers["x-forwarded-for"], ip: req.ip })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
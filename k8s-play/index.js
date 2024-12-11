const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({name: 'Jeelani'})
})
app.listen(8080, () => {
    console.log('server started');
})
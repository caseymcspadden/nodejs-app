const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Responding to GET REQUEST at root')
})
app.listen(3000, () => console.log('Server running on port 3000'))
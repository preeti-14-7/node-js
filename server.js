const express = require('express')
const path = require('path')

const app = express()


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'))
})

app.get('/contact-me.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact-me.html'))
})

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'))
})

app.listen(8080, function(){
    console.log("server started at port 3000");
});
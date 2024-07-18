require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>
{
    res.send('login page')
})

app.get('/login',(req,res)=>
{
   res.send("<h1>plase login in employee management system</h1>")
})

app.get('/ems',(req,res)=>
    {
       res.send("<h2>employee managment syastem</h2>")
    })
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
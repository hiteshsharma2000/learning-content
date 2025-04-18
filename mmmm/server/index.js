const connection=require('./db')
const express=require('express')
const {TestRoute}=require('./Routes/TestRoute')
const app =express()
app.use(express.json())

app.use('/test',TestRoute)
app.get('/',(req,res)=>{
    try {
           res.send('home page')
    } catch (error) {
        res.send('no go back')
    }
})

app.listen(8080, async ()=>{
    await connection;
    console.log('server is running')
})
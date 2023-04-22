const express=require('express');
const app=express();

const PORT=process.env.PORT || 5000;

app.use(express.json());

app.post('/signup', (req, res) =>{
    console.log(req.body);
    res.send("Recived signup data!")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}` )
})
import express from 'express';

const app = express();

const PORT = 8000;

const usersList =[
    {
        id:1,
        name:"sudhanshu",
        adress:"india"
    },
    {
        id:2,
        name:"aniket",
        adress:"UK"
    },
    {
        id:3,
        name:"ashish",
        adress:"Europe"
    }
]

app.get("/", (req, res)=>{
    
    res.send("hello");
})

app.get('/api/v1/users', (req, res)=>{
    
    res.json("sudhanshu");
})


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);

})
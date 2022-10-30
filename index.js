const express = require('express');
const { getUser } = require('./services/login');
//const user = require("./routes/user");
const app = express();
const PORT = 8080;

app.use(express.json());
app.get('/tshirt', (req, res) =>{
    res.status(200).send({
        tshirt:"asdasd",
        size:"large"
    });
});
 //app.use("/user", user);

app.listen(
    PORT,
    () => console.log(`It´s alive on http://localhost:${PORT}`)
);

/*app.get('/tshirt', (req, res) =>{
    res.status(200).send(
        {
            tshirt:'tshirt',
            size : 'large'
        }
    )
});


app.post('/tshirt/:id', (req, res)=>{
    const {id} = req.params;
    const {logo} = req.body;
    if(!logo){
        res.status(418).send({message: 'We need a logo!'})
    } 

    res.send({
        tshirt:`with your ${logo} and ID if ${id}`,
    });
}); */
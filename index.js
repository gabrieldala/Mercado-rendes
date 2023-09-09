import express from 'express';
const app = express();


// AQCHIVE ESTATIC
app.use(express.static('public'));

//VIEW ENGINE
app.set("view engine", 'ejs');


// ROUTAS QUE RENDERIZA A VIEW DO MERCADO EXPRESS
app.get("/", (req, res) =>{
    res.render("index");
})

const PORT = 4000
app.listen(PORT, () =>{
    console.log(`MERCADO EXPRESS NO AR! port: ${PORT}`)
})
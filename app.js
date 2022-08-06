const express = require('express');
const app = express();

app.use(express.json());

app.post('/school-meal', (request, response)=>{
    console.log(request)
    const utterance = request.body.userRequest.utterance;

    console.log(utterance);
});

app.listen(3000, ()=> console.log("node on 3000"));
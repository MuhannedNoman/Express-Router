const express = require('express');
const route = express.Router();

route.use((request,response,next)=>{
    console.log('MiddleWare in Action');
    next();
})

route.get('/',(request,response)=>{
    response.send('your in / route');
});

route.get('/example',(request,response)=>{
    response.send('your in /example route');
});

module.exports = route;
const express = require('express');
const appExpress = express();

const rooms = new Map;

// check users
appExpress.get('', (req, res) =>{
    rooms.set('key', '');
    res.json(rooms);
});

appExpress.listen(3000 , (error) => {
    if(error){
        throw Error(error);
        console.log('Error Server')
    }
    console.log('server on');
});
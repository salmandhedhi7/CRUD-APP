import express from 'express';

let router = express.router



router.get('/login', (req, res, next) => {

    console.log('This Is Login!' , new Date());

    res.send('This Is login V1' + new Date());

})


router.get('/signup', (req, res, next) => {

    console.log('This Is Login!' , new Date());

    res.send('This Is Login V1' + new Date());
   
})

export default router
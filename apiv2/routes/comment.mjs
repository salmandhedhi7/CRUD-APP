import  express  from 'express';

let router = express.Router()



router.get('/comment/:postId/:commentId',(req, res, next) =>{

    console.log('this is signup!', new Date());

    res.send('Post Created');

})

router.get('/comments/:postId/:commentId',(req, res, next) =>{

    console.log('this is signup!', new Date());

    res.send('Post Created');

})

router.put('/comment/:postId/:commentId',(req, res, next) =>{

    console.log('this is signup!', new Date());

    res.send('Post Created');

})

router.delete('/comment/:postId/:commentId',(req, res, next) =>{

    console.log('this is signup!', new Date());

    res.send('Post Created');

})


export default router
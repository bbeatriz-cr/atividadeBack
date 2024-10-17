import {Router,Request,Response, RequestHandler} from 'express'
 
const router = Router()
 
//FAZER A ROTA HOME, CONTATO E SOBRE
router.get('/',(req: Request,res: Response) => {
    res.render('home')    
})

router.get('/cadastro',(req: Request,res: Response) => {
    res.render('cadastro')
})

router.get('/sobre',(req: Request,res: Response) => {
    res.render('sobre')
})

export default router
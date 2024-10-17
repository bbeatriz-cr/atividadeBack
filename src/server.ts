//importando o express
import express,{Request, Response} from 'express'
import path from 'path'
//importando o arquivo index.ts das rotas
import mainRoutes from './routes/index'
import mustache from 'mustache-express'

 
//usando express
const server = express()

server.set('view engine','mustache')
server.set('views',path.join(__dirname,'views'))

server.engine('mustache',mustache())

server.use(express.static(path.join(__dirname,'../public')))
 
//inserindo a rota no servidor
server.use(mainRoutes)

//página não encontrada
server.use((req:Request,res:Response) =>{
    res.status(404).send("Página não encontrada")
})
 
//gerar o servidor na porta 3000
server.listen(3000)


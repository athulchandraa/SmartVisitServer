const jsonServer=require('json-server')
const server=jsonServer.create()
const router=jsonServer.router('db.json')
const middleWare=jsonServer.defaults()
const PORT=3000


server.use(middleWare)
server.use(router)

server.listen(PORT,()=>{
    console.log("JSON Server started")
})
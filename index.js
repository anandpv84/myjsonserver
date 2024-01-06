//import jsonsever
const jsonServer=require('json-server');

//create jsonserver
const mediaPlayerServer=jsonServer.create();

//create a connection to debugger.json  it uses a method named router
const router=jsonServer.router('db.json')

//create a middleware
const middleware=jsonServer.defaults();

//use this middleware
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)


const port=5000;

mediaPlayerServer.listen(port,()=>{
    console.log(`server is up and running in port ${port}`)
})

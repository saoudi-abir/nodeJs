const http= require('http')


const server= http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html')
 if(req.url=='/home'){
    res.statusCode=200
    res.write('Welcome\n')
    res.write('Saoudi Abir\n')
    res.write('Tunisia')
 }else if(req.url=='/contact'){
    res.statusCode=200
     res.write('Welcome from contact')
 }else if(req.url=='/about'){
    res.statusCode=200
    res.write('Welcome from about')
 }else{
      res.statusCode=404
      res.write('not found')
 
}
   // res.write(req.url)
    res.end()
})
server.listen(5000,()=>{console.log('server running')})
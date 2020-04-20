const http = require('http');
const Buffer = require('buffer').Buffer
const querystring = require('querystring')

const data = querystring.stringify({
    "message":"hello world"
})

const newAgent = new http.Agent({keepAlive:true})
const options = {
    hostname:'127.0.0.1',
    port:4000,
    path:'/aaa',
    method:'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
      }
}

const req = http.request('http://127.0.0.1/',options,(res)=>{
    console.log(`statusCode:${res.statusCode}`)
    console.log(`headers:${req.headers}`)

    res.setEncoding('utf8')
    res.write(data)
})
req.on('error',(e)=>{
    console.log('An Error occured!')
    console.log(e)
})
req.end()

// const server =  http.createServer((req,res)=> {
//     let body = '';

//     console.log(http.request)

//     req.setEncoding('utf-8')

//     req.on('data',(chunk)=> {
//         body += chunk
//     })
    
//     req.on('end',()=>{
//         try{
//             const data = JSON.parse(body)

//             res.write(typeof data)
//             res.end();

//         }catch(err){
//             res.statusCode = 400
//             return res.end(`错误:${err.message}`)
//         }
//     })
// })

// server.listen(4000,()=>{
//     console.log('Server is listening on port 4000')
// })
//导入http内置模块
const http = require('http');

//这个模块解析URL地址,从而拿到 pathname query
const urlModule = reqire('url');

//创建一个http服务器
const server = http.createServer();

//监听http服务器的request请求
server.on('request',function(req,res){
  //const url = req.url;
  const {pathname : url, query} = urlModule.parse(req.url,true);

  if(url === '/getscript'){
    var scriptStr = `${query.callback}()`;
    res.end(scriptStr);
  }
  else{
    res.end('404');
  }
});

//指定端口号并启动服务监听
server.listen(3000,function(){
  console.log('server listen at http://127.0.0.1:3000');
})

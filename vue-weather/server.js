const http = require('http');
const URL = require('url');

http.createServer((req,res)=>{
  // 调用URL模块，使用parse()方法将请求地址转化，通过传递第二个参数true可以将GET方法的query字符串转化为JSON
  let getMessage = URL.parse(req.url,true);
  // let city = getMessage.query['cityname'];


  let queryStr = getMessage.search;
  let dataUrl= "http://v.juhe.cn/weather/index"+queryStr+'&key=9af4c8e3f57e203e2a08d9ef4be162a2';

  getWeather(dataUrl,queryStr,(data)=>{
    res.writeHead(200,{'content-type':'application/json;charset=UTF-8'});
    res.end(data);
  });

}).listen(8080,()=>{
  console.log("server on http://localhost:8080");
});

function getWeather(dataUrl,queryStr,callback) {
  let resultStr = '';
  http.get(dataUrl,(res)=>{
    // 解构复值
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
    let error;
    if (statusCode !== 200) {
      error = new Error('请求失败！' +
          '\n状态码 ： ' + statusCode);
    }
    else if (!/^application\/json/.test(contentType)) {
      error = new Error('无效的 content-type.\n' +
          `期望 application/json 但获取的是 ${contentType}`);
    }
    if(error){
      console.error(error.message);
      // 消耗响应数据以释放内存
      res.resume();
      return null;
    }

    let rawData = '';
    res.on('data',(chunk)=>{rawData+=chunk});
    res.on('end',()=>{
      try {
        resultStr = `resolveData(${rawData})`;
        callback(resultStr);
      } catch (e) {
        console.error(e.message);
      }
    });
    res.on('error',(e)=>{console.log(`获取信息出错： 
    ${e.message}`)});
  });

}
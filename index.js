// require('./config/express');

var httpProxy = require('http-proxy');

var options = {
  changeOrigin: true,
  target: {
      https: true
  }
}

httpProxy.createServer(443, 'www.googleapis.com/youtube/v3/videos', options).listen(8001, function(){
  console.log('proxy started on ', new Date());
});

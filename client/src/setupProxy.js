const { createProxyMiddleware } = require('http-proxy-middleware');
const target = "http://localhost:38000/";

module.exports = function(app){
  app.use(
      createProxyMiddleware('/front/api', {
          target,
          changeOrigin: true
      })
  )
};
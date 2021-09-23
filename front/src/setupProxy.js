const { createProxyMiddleware } = require('http-proxy-middleware'); // yarn add http-proxy-middleware

module.exports = function (app) {
  app.use(
    '/api/community/',
    createProxyMiddleware({
      target: 'http://choi1994.iptime.org:8000/',
      changeOrigin: true,
    })
  );
};

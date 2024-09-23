const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/action/papi',
        createProxyMiddleware({
            target: 'http://47.97.42.173:28084',
            changeOrigin: true
        })
    );
};

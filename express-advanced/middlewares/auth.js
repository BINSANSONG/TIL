function auth(req, res, next) {
    console.log('사용자 인증 진행');
    next();
}

module.exports = auth;
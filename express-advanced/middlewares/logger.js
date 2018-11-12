function log(req, res, next) {
    console.log('모든 요청에 대해 로그를 남깁니다');
    next();
}

module.exports = log;
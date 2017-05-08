exports.DATABASE_URL = 'mongodb://dafear:sidney3@ds133311.mlab.com:33311/blog-apps'
exports.TEST_DATABASE_URL = (
	process.env.TEST_DATABASE_URL ||
	'mongodb://localhost/test-blog-app');
exports.PORT = process.env.PORT || 8080;




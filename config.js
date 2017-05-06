exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://dafear:sidney3@ds133311.mlab.com:33311/blog-apps'
exports.PORT = process.env.PORT || 33311;


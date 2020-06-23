const logger = (req, res, next) => {
  // create custom variable
  req.hello = 'hello, nodejs';
  console.log('middleware running!!!');
  console.log(
    `${req.method}  ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  next();
};

module.exports = logger;

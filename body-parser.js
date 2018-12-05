module.exports = (req, res, next) => {
  let buffer = '';
  req.on('data', (chunk) => {
    buffer += chunk;
  });

  req.on('end', () => {
    try {
      const json = JSON.parse(buffer)
      req.body = json;
    } catch {
      console.log('WARNING: Invalid json');
    }
    next();
  });
};

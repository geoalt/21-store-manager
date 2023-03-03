const validadeProductId = (req, res, next) => {
  const arr = req.body;

  for (let i = 0; i < arr.length; i += 1) {
    if (!arr[i].productId) return res.status(400).json({ message: '"productId" is required' });
  }

  next();
};

module.exports = validadeProductId;
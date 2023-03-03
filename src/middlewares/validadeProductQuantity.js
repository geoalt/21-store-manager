const validadeProductQuantity = (req, res, next) => {
  const arr = req.body;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].quantity <= 0) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
    if (!arr[i].quantity) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
  }

  next();
};

module.exports = validadeProductQuantity;
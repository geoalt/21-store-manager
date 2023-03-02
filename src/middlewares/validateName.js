const isEmpty = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
};

const hasMinLength = (req, res) => {
  const { name } = req.body;
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
};

const validadeName = (req, res, next) => isEmpty(req, res) || hasMinLength(req, res) || next();

module.exports = validadeName;

const getAll = (req, res) => {
     return res.status(200).json({message: 'Controller working properly!'})
};

module.exports = {getAll};
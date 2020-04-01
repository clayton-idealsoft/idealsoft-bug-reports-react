// exports.post = (req, res, next) => {
//     res.status(201).send('Requisição recebida com sucesso!');
// };

// exports.put = (req, res, next) => {
//     let id = req.params.id;
//     res.status(201).send(`Requisição recebida com sucesso! ${id}`);
// };

// exports.delete = (req, res, next) => {
//     let id = req.params.id;
//     res.status(200).send(`Requisição recebida com sucesso! ${id}`);
// };
const cosmoConn = require("../services/cosmoConn");
exports.get = async (req, res, next) => {
    var items = await cosmoConn.getAll();
    res.status(200).send(items);
};

const userModel = 
require('../models/userModel'); 
 
exports.listUsers = (req, res) => { 
  const users = userModel.getAllUsers(); 
  res.json(users); 
}; 
 
exports.addUser = (req, res) => { 
  const { name } = req.body; 
  userModel.addUser(name); 
  res.json({ message: 'Usuário adicionado com sucesso!' }); 
}; 
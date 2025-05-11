let users = []; 
exports.getAllUsers = () => { 
  return users; 
}; 
exports.addUser = (name) => { 
  users.push({ id: users.length + 1, name }); 
};
const express = require('express'); 
const path = require('path'); 
const userController = require('./controllers/userController'); 
 
const app = express(); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('views')); 
// Rotas 
app.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname, 'views', 'index.html')); 
}); 
// APIs de usuários 
app.get('/api/users', userController.listUsers); 
app.post('/api/users', userController.addUser); 
// Inicia o servidor 
app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));

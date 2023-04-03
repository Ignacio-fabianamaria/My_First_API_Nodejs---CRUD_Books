const app = require('./app');
// start no servidor.
app.listen(3001, () => console.log('Servidor rodando na porta 3001')); 

/* __________________________________________________________________________________________

 O start é provido pelo trecho app.listen... e dentro dele podemos passar até 2 parâmetros:
 - Primeiro parâmetro é o port (ou porta): Aqui passamos 3001, mas poderia ser qualquer porta
 não utilizada acima de 1023;
 - Segundo parâmetro é uma função: Aqui passamos apenas um console.log exibindo uma mensagem
 “Servidor rodando na porta 3001”;
_____________________________________________________________________________________________ */
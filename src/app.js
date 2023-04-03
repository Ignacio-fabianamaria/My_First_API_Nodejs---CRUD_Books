const express = require('express');
const books = require('./books');

const app = express();
// é um middleware do framework Express.js usado para analisar o corpo das solicitações HTTP.
// use esse middleware em sua aplicação se estiver lidando com dados JSON em suas rotas.
app.use(express.json());

// Listando books
app.get('/books', (req, res) => res.status(200).json({ books }));

// Filtrando um book por id
app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const bookId = books.find((book) => book.id === Number(id));
    if (!bookId) res.status(404).json({ message: 'Livro não encontrado' });
    res.status(200).json({ bookId });
  });

// Cadastrando um novo book
app.post('/books', (req, res) => {
    const newBooks = { ...req.body };
    books.push(newBooks);
    res.status(201).json({ books: newBooks });
  });

 // Atualizando dados de um book cadastrado  
app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const updateBooks = books.find((book) => book.id === Number(id));
    if (!updateBooks) res.status(404).json({ message: 'Livro não encontrado' });
    updateBooks.title = title;
    updateBooks.author = author;
    res.status(200).json({ updateBooks });
  });

 // Deletando um book usando como referencia o id 
  app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const bookId = books.findIndex((book) => book.id === Number(id));
    if (!bookId) res.status(404).json({ message: 'Livro não encontrado.' });
    books.splice(bookId, 1);
    res.status(200).end();
  });

module.exports = app;
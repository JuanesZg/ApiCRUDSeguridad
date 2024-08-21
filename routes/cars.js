// routes/cars.js
const express = require('express');
const router = express.Router();
const connection = require('../db');

// Crear un nuevo carro
router.post('/cars', (req, res) => {
  const { brand, model, year, color } = req.body;
  const sql = 'INSERT INTO cars (brand, model, year, color) VALUES (?, ?, ?, ?)';
  connection.query(sql, [brand, model, year, color], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Server error');
    }
    res.status(201).send('Car created');
  });
});

// Leer todos los carros
router.get('/cars', (req, res) => {
  const sql = 'SELECT * FROM cars';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).json(results);
  });
});

// Actualizar un carro
router.put('/cars/:id', (req, res) => {
  const { id } = req.params;
  const { brand, model, year, color } = req.body;
  const sql = 'UPDATE cars SET brand = ?, model = ?, year = ?, color = ? WHERE id = ?';
  connection.query(sql, [brand, model, year, color, id], (err, result) => {
    if (err) {
      console.error('Error updating data:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).send('Car updated');
  });
});

// Eliminar un carro
router.delete('/cars/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM cars WHERE id = ?';
  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).send('Car deleted');
  });
});

module.exports = router;

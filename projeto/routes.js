const express = require('express');
const router = express.Router();
const Event = require('./event');

// Rota para salvar um evento
router.post('/event', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para listar todos os eventos
router.get('/event', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



// Rota para obter um evento específico por ID
router.get('/event/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para atualizar um evento
router.put('/event/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!event) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para remover um evento
router.delete('/event/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndRemove(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }
    res.json({ message: 'Evento removido com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

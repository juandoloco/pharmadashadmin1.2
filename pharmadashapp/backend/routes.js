const express = require('express');
const router = express.Router();
const { clientes, items, mensajero, ordenes, roles, sede, usuario } = require('./models');

// Rutas para 'clientes'
router.get('/clientes', async (req, res) => {
  try {
    const clients = await clientes.findAll();
    res.json(clients);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/clientes/:id', async (req, res) => {
  try {
    const client = await clientes.findByPk(req.params.id);
    res.json(client);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/clientes', async (req, res) => {
  try {
    const client = await clientes.create(req.body);
    res.json(client);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/clientes/:id', async (req, res) => {
  try {
    const client = await clientes.update(req.body, { where: { id_clientes: req.params.id } });
    res.json(client);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/clientes/:id', async (req, res) => {
  try {
    await clientes.destroy({ where: { id_clientes: req.params.id } });
    res.json({ message: 'Cliente eliminado' });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Rutas para 'items'
router.get('/items', async (req, res) => {
  try {
    const itemsList = await items.findAll();
    res.json(itemsList);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/items/:id', async (req, res) => {
  try {
    const item = await items.findByPk(req.params.id);
    res.json(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/items', async (req, res) => {
  try {
    const item = await items.create(req.body);
    res.json(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/items/:id', async (req, res) => {
  try {
    const item = await items.update(req.body, { where: { id_items: req.params.id } });
    res.json(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/items/:id', async (req, res) => {
  try {
    await items.destroy({ where: { id_items: req.params.id } });
    res.json({ message: 'Item eliminado' });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Rutas para 'mensajero'
router.get('/mensajero', async (req, res) => {
  try {
    const mensajeros = await mensajero.findAll();
    res.json(mensajeros);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/mensajero/:id', async (req, res) => {
  try {
    const mensajero = await mensajero.findByPk(req.params.id);
    res.json(mensajero);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/mensajero', async (req, res) => {
  try {
    const newMensajero = await mensajero.create(req.body);
    res.json(newMensajero);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/mensajero/:id', async (req, res) => {
  try {
    const updatedMensajero = await mensajero.update(req.body, { where: { id_mensajero: req.params.id } });
    res.json(updatedMensajero);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/mensajero/:id', async (req, res) => {
  try {
    await mensajero.destroy({ where: { id_mensajero: req.params.id } });
    res.json({ message: 'Mensajero eliminado' });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Rutas para 'ordenes'
router.get('/ordenes', async (req, res) => {
  try {
    const ordenesList = await ordenes.findAll();
    res.json(ordenesList);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/ordenes/:id', async (req, res) => {
  try {
    const orden = await ordenes.findByPk(req.params.id);
    res.json(orden);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/ordenes', async (req, res) => {
  try {
    const newOrden = await ordenes.create(req.body);
    res.json(newOrden);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/ordenes/:id', async (req, res) => {
  try {
    const updatedOrden = await ordenes.update(req.body, { where: { id_ordenes: req.params.id } });
    res.json(updatedOrden);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/ordenes/:id', async (req, res) => {
  try {
    await ordenes.destroy({ where: { id_ordenes: req.params.id } });
    res.json({ message: 'Orden eliminada' });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Rutas para 'roles'
router.get('/roles', async (req, res) => {
  try {
    const rolesList = await roles.findAll();
    res.json(rolesList);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/roles/:id', async (req, res) => {
  try {
    const rol = await roles.findByPk(req.params.id);
    res.json(rol);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/roles', async (req, res) => {
  try {
    const newRol = await roles.create(req.body);
    res.json(newRol);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/roles/:id', async (req, res) => {
  try {
    const updatedRol = await roles.update(req.body, { where: { id_rol: req.params.id } });
    res.json(updatedRol);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/roles/:id', async (req, res) => {
  try {
    await roles.destroy({ where: { id_rol: req.params.id } });
    res.json({ message: 'Rol eliminado' });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Rutas para 'sede'
router.get('/sede', async (req, res) => {
  try {
    const sedes = await sede.findAll();
    res.json(sedes);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/sede/:id', async (req, res) => {
  try {
    const sede = await sede.findByPk(req.params.id);
    res.json(sede);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/sede', async (req, res) => {
  try {
    const newSede = await sede.create(req.body);
    res.json(newSede);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/sede/:id', async (req, res) => {
  try {
    const updatedSede = await sede.update(req.body, { where: { id_sede: req.params.id } });
    res.json(updatedSede);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/sede/:id', async (req, res) => {
  try {
    await sede.destroy({ where: { id_sede: req.params.id } });
    res.json({ message: 'Sede eliminada' });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Rutas para 'usuario'
router.get('/usuario', async (req, res) => {
  try {
    const usuarios = await usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/usuario/:id', async (req, res) => {
  try {
    const usuario = await usuario.findByPk(req.params.id);
    res.json(usuario);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/usuario', async (req, res) => {
  try {
    const newUsuario = await usuario.create(req.body);
    res.json(newUsuario);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/usuario/:id', async (req, res) => {
  try {
    const updatedUsuario = await usuario.update(req.body, { where: { id_usuario: req.params.id } });
    res.json(updatedUsuario);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/usuario/:id', async (req, res) => {
  try {
    await usuario.destroy({ where: { id_usuario: req.params.id } });
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

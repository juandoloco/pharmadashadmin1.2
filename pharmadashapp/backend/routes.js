const express = require('express');
const router = express.Router();
const { clientes, items, mensajero, ordenes, roles, sede, usuario } = require('./models');

// Rutas para 'clientes'
router.get('/clientes', async (req, res) => {
  const clients = await clientes.findAll();
  res.json(clients);
});

router.get('/clientes/:id', async (req, res) => {
  const client = await clientes.findByPk(req.params.id);
  res.json(client);
});

router.post('/clientes', async (req, res) => {
  const client = await clientes.create(req.body);
  res.json(client);
});

router.put('/clientes/:id', async (req, res) => {
  const client = await clientes.update(req.body, { where: { id_clientes: req.params.id } });
  res.json(client);
});

router.delete('/clientes/:id', async (req, res) => {
  await clientes.destroy({ where: { id_clientes: req.params.id } });
  res.json({ message: 'Cliente eliminado' });
});

// Rutas para 'items'
router.get('/items', async (req, res) => {
    const itemsList = await items.findAll();
    res.json(itemsList);
  });
  
  router.get('/items/:id', async (req, res) => {
    const item = await items.findByPk(req.params.id);
    res.json(item);
  });
  
  router.post('/items', async (req, res) => {
    const item = await items.create(req.body);
    res.json(item);
  });
  
  router.put('/items/:id', async (req, res) => {
    const item = await items.update(req.body, { where: { id_items: req.params.id } });
    res.json(item);
  });
  
  router.delete('/items/:id', async (req, res) => {
    await items.destroy({ where: { id_items: req.params.id } });
    res.json({ message: 'Item eliminado' });
  });
  
 // Rutas para 'mensajero'
router.get('/mensajero', async (req, res) => {
    const mensajeros = await mensajero.findAll();
    res.json(mensajeros);
  });
  
  router.get('/mensajero/:id', async (req, res) => {
    const mensajero = await mensajero.findByPk(req.params.id);
    res.json(mensajero);
  });
  
  router.post('/mensajero', async (req, res) => {
    const newMensajero = await mensajero.create(req.body);
    res.json(newMensajero);
  });
  
  router.put('/mensajero/:id', async (req, res) => {
    const updatedMensajero = await mensajero.update(req.body, { where: { id_mensajero: req.params.id } });
    res.json(updatedMensajero);
  });
  
  router.delete('/mensajero/:id', async (req, res) => {
    await mensajero.destroy({ where: { id_mensajero: req.params.id } });
    res.json({ message: 'Mensajero eliminado' });
  });
  
  // Rutas para 'ordenes'
router.get('/ordenes', async (req, res) => {
    const ordenesList = await ordenes.findAll();
    res.json(ordenesList);
  });
  
  router.get('/ordenes/:id', async (req, res) => {
    const orden = await ordenes.findByPk(req.params.id);
    res.json(orden);
  });
  
  router.post('/ordenes', async (req, res) => {
    const newOrden = await ordenes.create(req.body);
    res.json(newOrden);
  });
  
  router.put('/ordenes/:id', async (req, res) => {
    const updatedOrden = await ordenes.update(req.body, { where: { id_ordenes: req.params.id } });
    res.json(updatedOrden);
  });
  
  router.delete('/ordenes/:id', async (req, res) => {
    await ordenes.destroy({ where: { id_ordenes: req.params.id } });
    res.json({ message: 'Orden eliminada' });
  });
  
  // Rutas para 'roles'
router.get('/roles', async (req, res) => {
    const rolesList = await roles.findAll();
    res.json(rolesList);
  });
  
  router.get('/roles/:id', async (req, res) => {
    const rol = await roles.findByPk(req.params.id);
    res.json(rol);
  });
  
  router.post('/roles', async (req, res) => {
    const newRol = await roles.create(req.body);
    res.json(newRol);
  });
  
  router.put('/roles/:id', async (req, res) => {
    const updatedRol = await roles.update(req.body, { where: { id_rol: req.params.id } });
    res.json(updatedRol);
  });
  
  router.delete('/roles/:id', async (req, res) => {
    await roles.destroy({ where: { id_rol: req.params.id } });
    res.json({ message: 'Rol eliminado' });
  });

  // Rutas para 'usuario'
router.get('/usuario', async (req, res) => {
    const usuarios = await usuario.findAll();
    res.json(usuarios);
  });
  
  router.get('/usuario/:id', async (req, res) => {
    const usuario = await usuario.findByPk(req.params.id);
    res.json(usuario);
  });
  
  router.post('/usuario', async (req, res) => {
    const newUsuario = await usuario.create(req.body);
    res.json(newUsuario);
  });
  
  router.put('/usuario/:id', async (req, res) => {
    const updatedUsuario = await usuario.update(req.body, { where: { id_usuario: req.params.id } });
    res.json(updatedUsuario);
  });
  
  router.delete('/usuario/:id', async (req, res) => {
    await usuario.destroy({ where: { id_usuario: req.params.id } });
    res.json({ message: 'Usuario eliminado' });
  });
  
  // Rutas para 'sede'
router.get('/sede', async (req, res) => {
    const sedes = await sede.findAll();
    res.json(sedes);
  });
  
  router.get('/sede/:id', async (req, res) => {
    const sede = await sede.findByPk(req.params.id);
    res.json(sede);
  });
  
  router.post('/sede', async (req, res) => {
    const newSede = await sede.create(req.body);
    res.json(newSede);
  });
  
  router.put('/sede/:id', async (req, res) => {
    const updatedSede = await sede.update(req.body, { where: { id_sede: req.params.id } });
    res.json(updatedSede);
  });
  
  router.delete('/sede/:id', async (req, res) => {
    await sede.destroy({ where: { id_sede: req.params.id } });
    res.json({ message: 'Sede eliminada' });
  });
  

module.exports = router;

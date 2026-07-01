const { ipcMain } = require('electron');
// Imaginando que tienes un módulo de conexión a tu DB de Mongo
const db = require('../db'); 

function initEmployeeIPC() {
  // IPC: employee:getAll
  ipcMain.handle('employee:getAll', async () => {
    try {
      return await db.collection('empleados').find().toArray();
    } catch (error) {
      console.error("Error al obtener empleados:", error);
      return [];
    }
  });

  // IPC: employee:getById
  ipcMain.handle('employee:getById', async (event, id) => {
    try {
      return await db.collection('empleados').findOne({ _id: id });
    } catch (error) {
      return null;
    }
  });

  // IPC: employee:search
  ipcMain.handle('employee:search', async (event, query) => {
    try {
      return await db.collection('empleados').find({
        nombre: { $regex: query, $options: 'i' }
      }).toArray();
    } catch (error) {
      return [];
    }
  });
}

module.exports = { initEmployeeIPC };
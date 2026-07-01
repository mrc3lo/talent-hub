const { ipcMain } = require('electron');

function setupCandidateIPC() {
  // Canal para obtener todos los candidatos
  ipcMain.handle('candidate:getAll', async (event) => {
    try {
      // AQUÍ: Lógica real de MongoDB (ej. db.candidatos.find().toArray())
      // Por ahora, retornamos datos falsos (mock) para probar el frontend
      return [
        { id: 1, nombre: "Ana Pérez", puesto: "Desarrollador", estado: "entrevista" },
        { id: 2, nombre: "Luis Gómez", puesto: "Diseñador", estado: "postulado" }
      ];
    } catch (error) {
      console.error("Error obteniendo candidatos:", error);
      return [];
    }
  });

  // Canal para actualizar la columna (estado) cuando arrastras una tarjeta
  ipcMain.handle('candidate:updateStatus', async (event, { id, newStatus }) => {
    try {
      // AQUÍ: Lógica real de MongoDB (ej. db.candidatos.updateOne(...))
      console.log(`Actualizando candidato ${id} a estado: ${newStatus}`);
      return { success: true };
    } catch (error) {
      console.error("Error actualizando estado:", error);
      return { success: false };
    }
  });
}

module.exports = { setupCandidateIPC };
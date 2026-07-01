export const candidateService = {
  
  // Llama al preload para obtener todos los candidatos y pintar el tablero
  getAll: async () => {
    try {
      const candidatos = await window.api.candidate.getAll();
      return candidatos;
    } catch (error) {
      console.error("Error al obtener candidatos en el service:", error);
      throw error;
    }
  },

  // Llama al preload para avisar que movimos la tarjeta de columna
  updateStatus: async (candidateId, newStatus) => {
    try {
      // Enviamos el objeto 'data' tal como lo espera el preload y el main
      const result = await window.api.candidate.updateStatus({ id: candidateId, newStatus });
      return result;
    } catch (error) {
      console.error("Error al actualizar el estado del candidato:", error);
      throw error;
    }
  }
  
};
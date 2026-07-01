import React, { useEffect, useState } from 'react';
import { employeeService } from '../services/employeeService';

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Al cargar la página, solicitamos los empleados a través del flujo IPC
    employeeService.getAll().then(data => {
      setEmployees(data);
    });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Directorio de Empleados</h1>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>{emp.nombre} - <strong>{emp.puesto}</strong></li>
        ))}
      </ul>
    </div>
  );
}
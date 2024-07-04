import { useEffect, useState } from "react";

function ViewingResults() {
  const [successRecords, setSuccessRecords] = useState([]);
  const [errorRecords, setErrorRecords] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/upload');
        const data = await response.json();
        if (response.ok) {
          setSuccessRecords(data.data.success);
          setErrorRecords(data.data.errors);
        } else {
          console.error('Error al obtener los datos:', data.error);
        }
      } catch (error) {
        console.error('Error al conectar con la API:', error);
      }
    }
    fetchData();
  }, []);

  const handleRetry = (index) => {
    console.log('Reintentando la carga del registro en la fila:', index);
  };

  const handleNewFile = () => {
    setSuccessRecords([]);
    setErrorRecords([]);
    console.log('Reiniciando la vista para cargar un nuevo archivo...');
  };

  return (
    <section className="data-upload-system">
      <h1>Sistema de Carga de Datos</h1>

      <div className="success-summary">
        <span>
          <i className="success-icon">✔️</i> {successRecords.length} registros cargados exitosamente
        </span>
      </div>

      {errorRecords.length > 0 && (
        <div className="error-list">
          <h3>{errorRecords.length} registros encontraron errores. Corrige estos problemas y reinténtalo.</h3>
          {errorRecords.map((error, index) => (
            <div key={index} className="error-record">
              <div className="error-row">Fila {error.row}</div>
              <div className="error-fields">
                {Object.keys(error.details).map((field) => (
                  <div key={field} className="error-field">
                    <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                    <input
                      type="text"
                      defaultValue={successRecords.length > index ? successRecords[index][field] : ''}
                      className={error.details[field] ? 'error' : ''}
                    />
                  </div>
                ))}
              </div>
              <button className="retry-button" onClick={() => handleRetry(index)}>Reintentar</button>
            </div>
          ))}
        </div>
      )}

      <button className="new-file-button" onClick={handleNewFile}>Nuevo Archivo</button>

      <style jsx>{`
        .data-upload-system {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .success-summary {
          display: flex;
          align-items: center;
          background-color: #e6ffed;
          border: 1px solid #b3ffcc;
          padding: 10px;
          margin-bottom: 20px;
        }

        .success-icon {
          color: #4caf50;
          margin-right: 10px;
        }

        .error-list {
          margin-bottom: 20px;
        }

        .error-record {
          display: flex;
          align-items: center;
          border: 1px solid #ffb3b3;
          background-color: #ffe6e6;
          padding: 10px;
          margin-bottom: 10px;
        }

        .error-row {
          flex: 1;
        }

        .error-fields {
          display: flex;
          flex: 4;
        }

        .error-field {
          margin-right: 20px;
        }

        .error input {
          border: 1px solid #ff0000;
        }

        .error-message {
          color: #ff0000;
          font-size: 12px;
        }

        .retry-button {
          background-color: #4caf50;
          color: #fff;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
        }

        .retry-button:hover {
          background-color: #45a049;
        }

        .new-file-button {
          background-color: #2196f3;
          color: #fff;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
        }

        .new-file-button:hover {
          background-color: #1976d2;
        }
      `}</style>
    </section>
  );
}

export default ViewingResults;

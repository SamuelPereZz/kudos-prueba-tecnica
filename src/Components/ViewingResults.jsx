import { useEffect, useState } from 'react';
import Button from './Button';
import styled from '@emotion/styled';

function ViewingResults() {
  const [successRecords, setSuccessRecords] = useState([]);
  const [errorRecords, setErrorRecords] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/upload');
        const data = await response.json();
        if (data.ok) {
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

  const handleRetry = () => {
    console.log('Reintentando la carga del registro...');
    // lógica para reintentar la carga de registros 
  };

  const handleNewFile = () => {
    console.log('Reiniciando la vista para cargar un nuevo archivo...');
    // lógica para reiniciar la vista para cargar un nuevo archivo
  };

  return (
    <Container>
      <h2>The {errorRecords.length} records listed below encountered errors. Please rectify these issues and retry.</h2>

      <DataRows>
        <ul>
          {errorRecords.map((error, index) => (
            <DataRow key={index}>
              <Row>
                <p>Fila:</p>
                <p>{error.row}</p>
              </Row>
              <DetailsList>
                {Object.entries(error.details).map(([field, value]) => (
                  <Data key={field}>
                    <span>{field}: </span>
                    <input
                      type='text'
                      defaultValue={value}
                      onChange={(e) => {
                        console.log(`Campo ${field} editado: `, e.target.value);
                      }}
                    />
                  </Data>
                ))}
              </DetailsList>
              <RetryButton onClick={handleRetry}>Retry</RetryButton>
            </DataRow>
          ))}
        </ul>
      </DataRows>

      <Button onClick={handleNewFile}>New File</Button>
    </Container>
  );
}

export default ViewingResults;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DataRows = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

const DataRow = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

const DetailsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 0.5rem;
  }
`;

const Data = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-transform: capitalize;
`;

const RetryButton = styled(Button)`
`;

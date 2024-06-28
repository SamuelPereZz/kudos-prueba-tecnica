import { Route, Routes } from 'react-router-dom';
import './App.css';
import UploadPage from './Pages/UploadPage';
import Login from './Pages/Login';

function App() {
  return (
      <div className='border-box'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/upload' element={<UploadPage />} />
        </Routes>
    </div>
  );
}

export default App;

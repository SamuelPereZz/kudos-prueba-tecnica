import { Route, Routes } from 'react-router-dom';
import './App.css';
import UploadPage from './Pages/UploadPage';
import Login from './Pages/Login';

function App() {
  return (
    <div className='container'>
      <div className='border-box'>
        <p className='title'>DATA LOADING SYSTEM</p>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/upload' element={<UploadPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

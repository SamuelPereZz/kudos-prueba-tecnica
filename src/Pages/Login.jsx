import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pages/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login'); //Iniciar db con => 'json-server --watch db.json --port 5000'
      const data = await response.json();

      if (!data.ok) {
        setError('We cannot authenticate at this time, please try again later');
        return;
      }

      const { email: dbEmail, token } = data.data;

      if (email === dbEmail && password === 'supersecret') {
        localStorage.setItem('token', token);
        navigate('/upload');
      } else if (email === dbEmail) {
        setError('Incorrect password');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('Error de autenticación:', error);
      setError('There was a problem with authentication');
    }
  };

  return (
    <div className='login-box'>
      <p className='title'>DATA LOADING SYSTEM</p>
      <form onSubmit={handleSubmit}>
        <div className='user-box'>
          <input
            required
            name='email'
            type='text'
            placeholder=' '
            value={email}
            onChange={handleEmailChange}
          />
          <label>Email</label>
        </div>
        <div className='user-box'>
          <input
            required
            name='password'
            type='password'
            placeholder=' '
            value={password}
            onChange={handlePasswordChange}
          />
          <label>Password</label>
        </div>
        {error && <p className='error-message'>{error}</p>}
        <button type='submit'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </button>
      </form>

    </div>
  );
}

export default Login;

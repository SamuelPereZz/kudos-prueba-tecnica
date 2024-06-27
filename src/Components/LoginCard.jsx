import { useNavigate } from 'react-router-dom'; 
import '../Components/LoginCard.css';
import { useState } from 'react';

function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login'); // json-server --watch db.json --port 5000
      const data = await response.json();
      if (data.ok) {
        const { email: dbEmail, token } = data.data;
        if (email === dbEmail && password === 'supersecret') {
          localStorage.setItem('token', token);
          navigate('/Upload');
        } else {
          setError('Credenciales inválidas');
        }
      } else {
        setError('Hubo un problema con la autenticación');
      }
    } catch (error) {
      console.error('Error de autenticación:', error);
      setError('Hubo un problema con la autenticación');
    }
  };

  return (
    <div className='login-box'>
      <form onSubmit={handleSubmit}>
        <div className='user-box'>
          <input
            required
            name='email'
            type='text'
            placeholder=' '
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
      <p>
        Don&apos;t have an account? {' '}
        <a href='' className='a2'>
          Sign up!
        </a>
      </p>
    </div>
  );
}

export default LoginCard;

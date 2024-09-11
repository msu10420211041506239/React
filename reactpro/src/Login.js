import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  const [status, setStatus] = useState(""); 
  const [email, setEmail] = useState("");   
  const [password, setPassword] = useState(""); 

  const handleLogin = async (event) => {
    event.preventDefault(); 

    if (!email || !password) {
      setStatus("Please fill out both fields.");
      return;
    }

    try {
      const response = await fetch('/datas.json');
      const data = await response.json();
      
      const user = data.find(
        (item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password
      );

      if (user) {
        setStatus("Login success");
      } else {
        setStatus("Please signup");
      }
    } catch (error) {
      setStatus("An error occurred while fetching user data");
    }
  };
  const Handle =() =>{
    navigate('/Signup')
  }

  return (
    <div>
      <form onSubmit={handleLogin}> 
        <label id="kj">Email:</label>
        <input
          type="email"
          placeholder="Enter email"
          id="po"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <label id='jk'>Password:</label>
        <input
          type="password"
          placeholder='Enter password'
          id='lo'
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit" id='kl'>Login</button> 
        {status && <h1 id='hx'>{status}</h1>} 
        <a href='Signup' id='qq' onClick={Handle}>Signup</a>
      </form>
    </div>
  );
};

export default Login;

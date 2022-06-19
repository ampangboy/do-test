import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../InputBox/InputBox';
import Button from '../Button/Button';
import './LoginForm.css';
import { sendAuth } from '../../apis';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = () => {
    const res = sendAuth(username, password);

    if (res) {
      navigate('/data');
    }
  };

  return (
    <div className="login-form-container">
      <form>
        <InputBox
          placeholder="Username"
          type="text"
          aria-label="Username"
          value={username}
          handleChange={handleUsernameChange}
        />
        <InputBox
          placeholder="Password"
          type="password"
          aria-label="Password"
          value={password}
          handleChange={handlePasswordChange}
        />
        <Button text="Login" handleSubmit={handleSubmit} />
      </form>
    </div>
  );
}

export default LoginForm;

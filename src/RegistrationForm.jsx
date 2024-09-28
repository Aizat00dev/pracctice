import { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      return setError('All fields are should be filled  :(');
    }

    if (password !== confirmPassword) {
      return setError('Passwords are not matching  :(');
    }

    if (isRegistered) {
      return setError('User is already registered  :(');
    }

    setIsRegistered(true);
    setError('');
    alert('Registered successfully 😊');  
    return
  }

  return (
    <div>
      <h2>Registration</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm passowrd"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default RegistrationForm;

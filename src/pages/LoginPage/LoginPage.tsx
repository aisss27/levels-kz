import { useState } from 'react';
import axios from 'axios';
import styles from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice.ts';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      axios
        .post('https://onelab-levels-api.vercel.app/api/auth/signin', {
          email: email,
          password: password,
        })
        .then((res) => {
          dispatch(login({ token: res.data.token, email: email }));
          navigate('/');
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.loginLabel}>Вход в аккаунт</h2>
        <div className={styles.loginForm}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            type="email"
            name="email"
            placeholder="Логин"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            type="password"
            name="password"
            placeholder="Пароль"
            required
          />
          <button
            className={styles.loginButton}
            onClick={handleLogin}
            type="submit"
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

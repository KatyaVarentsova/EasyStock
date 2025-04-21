import styles from "./LoginPage.module.css";
import { HomeLayout, Logo, Button, Input } from "../../components";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';


export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const response = await login({ email, password });
  
    if (response.success) {
      console.log('Успешно вошли:', response.user);
      navigate('/link');
      
    } else {
      alert(response.message);
    }
  };
  

  return (
    <HomeLayout>
      <Logo className={styles.logo_center}></Logo>
      <form className={styles.container} onSubmit={handleSubmit}>
        <Input
          type="email"
          className={styles.login_input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        ></Input>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          required
        ></Input>
        <Button type="submit">Войти</Button>
      </form>
    </HomeLayout>
  );
};

import styles from './LoginPage.module.css'
import { HomeLayout, Logo, Button, Input } from '../../components';

export const LoginPage = () => {
    return (
        <HomeLayout>
            <Logo className={styles.logo_center}></Logo>
            <div className={styles.container}>
                <Input type="text" placeholder='Логин' className={styles.login_input}></Input>
                <Input type="password" placeholder='Пароль' className={styles.login_input}></Input>
                <Button>Войти</Button>
            </div>
        </HomeLayout>
    );
};

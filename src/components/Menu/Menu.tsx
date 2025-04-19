import { useState } from 'react';
import styles from './Menu.module.css';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className={styles.wrapper}>
      <button className={styles.burger} onClick={handleToggle}>
        <FaBars size={20} />
      </button>

      {isOpen && (
        <>
          <div className={styles.overlay} onClick={handleClose}></div>

          <div className={styles.menu}>
            <nav className={styles.nav}>
              <NavLink to="/orders" onClick={handleClose}>Заказы →</NavLink>
              <NavLink to="/supplies" onClick={handleClose}>Поставки →</NavLink>
              <NavLink to="/reports" onClick={handleClose}>Отчёты →</NavLink>
              <NavLink to="/products" onClick={handleClose}>Товары →</NavLink>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;

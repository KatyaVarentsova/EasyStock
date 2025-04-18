import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
  children: ReactNode;
  classType?: 'primary';
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  classType = 'primary',
  className = '',
  ...rest
}: Props) => {
  return (
    <button className={`${styles.button} ${styles[classType]} ${className}`} {...rest}>
      {children}
    </button>
  );
};
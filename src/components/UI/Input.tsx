import type { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

type Props = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({
  className = '',
  ...rest
}: Props) => {
  return (
    <input className={`${styles.input} ${className}`} {...rest}/>
  );
};
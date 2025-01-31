import React from 'react';
import styles from './Input.module.css';

function Input({ type, value, onChange, onblur, validate, error, ...props }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={props.nome} className={styles.label}>
        {props.label}
      </label>
      <input
        name={props.nome}
        type={type}
        className={styles.input}
        value={value}
        onChange={onChange}
        onBlur={onblur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;

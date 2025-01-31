import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginReset from './LoginReset';
import LoginForget from './LoginForget';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';
import NotFound from '../../NotFound';
function Login() {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginForget />} />
          <Route path="/resetar" element={<LoginReset />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </section>
  );
}

export default Login;

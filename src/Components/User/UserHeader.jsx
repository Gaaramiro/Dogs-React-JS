import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

function UserHeader() {
  const [title, setTitle] = React.useState(null);
  const { pathname } = useLocation();
  React.useEffect(() => {
    switch (pathname) {
      case '/conta/estatisticas':
        setTitle('Estátisticas');
        break;
      case '/conta/postar':
        setTitle('Poste Sua Foto');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [pathname]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;

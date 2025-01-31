import React from 'react';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST, PASSWORD_RESET } from '../../api';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

function LoginReset() {
  const [key, setKey] = React.useState('');
  const [login, setLogin] = React.useState('');
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();
  <Head title="Resetar Senha" />;

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubimit(event) {
    event.preventDefault();

    const { url, options } = PASSWORD_RESET({
      key,
      login,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) navigate('/login');
  }

  return (
    <section className="animaLeft">
      <h1 className="title">Resetar a senha</h1>
      <form onSubmit={handleSubimit}>
        <Input type="password" label="Nova Senha" {...password} />
        {loading ? (
          <Button disabled>Resetando</Button>
        ) : (
          <Button>Resetar</Button>
        )}
        {error ? <Error error={error} /> : ''}
      </form>
    </section>
  );
}

export default LoginReset;

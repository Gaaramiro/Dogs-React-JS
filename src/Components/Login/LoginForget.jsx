import React from 'react';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

function LoginPasswordLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();
  async function handleSubimit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { json, response } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section>
      <Head title="Recuperar senha" />
      <h1 className="title">Perdeu a senha ?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubimit}>
          <Input type="text" label="Email / Usúario" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando ...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      {error ? <Error error={error} /> : ''}
    </section>
  );
}

export default LoginPasswordLost;

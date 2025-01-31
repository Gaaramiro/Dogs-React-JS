import React, { useContext } from 'react';
import useForm from '../../Hooks/useForm';
import Input from '../../Components/Form/Input';
import Button from '../../Components/Form/Button';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Error from '../../Components/Helper/Error';
import Head from '.././Helper/Head';

function LoginCreate() {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = React.useContext(UserContext);

  const { loading, error, request } = useFetch();

  async function handleSubimit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
    console.log(response);
  }
  return (
    <section className="animaLeft">
      <Head title=" Cadastro" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubimit}>
        <Input type="text" label="Usuario" name="username" {...username} />{' '}
        <Input type="email" label="Email" name="email" {...email} />{' '}
        <Input type="password" label="Senha" name="password" {...password} />
        <Error error={error} />
        {loading ? (
          <Button disabled>Cadastrando ...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
      </form>
    </section>
  );
}

export default LoginCreate;

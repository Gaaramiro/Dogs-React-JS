import React from 'react';
import Enviar from '../Assets/enviar.svg?react';
import useFetch from '../Hooks/useFetch';
import { COMMENT_POST } from '../api';
import Error from '../Components/Helper/Error';
import styles from './PhotoCommentsForm.module.css';

function PhotoCommentsForm({ id, setComments, single }) {
  const [comment, setComment] = React.useState('');
  const { error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    setComment('');
    if (response.ok) setComments((comments) => [...comments, json]);
  }
  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        onChange={({ target }) => setComment(target.value)}
        value={comment}
        placeholder="Comente aqui."
        name="comment"
        id="comment"
      ></textarea>
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
}

export default PhotoCommentsForm;

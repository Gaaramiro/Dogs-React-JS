import React from 'react';
import useFetch from '../Hooks/useFetch';
import styles from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../api';

function PhotoDelete({ id }) {
  const { loanding, request } = useFetch();

  async function handleDelete() {
    const { url, options } = PHOTO_DELETE(id);
    const { response } = await request(url, options);
    if (response.ok) {
      window.location.reload();
    }
  }

  return (
    <>
      {loanding ? (
        <button disabled className={styles.delete}>
          Deletando...
        </button>
      ) : (
        <button className={styles.delete} onClick={handleDelete}>
          Deletar
        </button>
      )}
    </>
  );
}

export default PhotoDelete;

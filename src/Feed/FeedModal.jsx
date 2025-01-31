import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../Hooks/useFetch';
import { PHOTO_GET } from '../api';
import Error from '../Components/Helper/Error';
import Loading from '../Components/Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.currentTarget === event.target) setModalPhoto(null);
  }
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;

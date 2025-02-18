import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { PHOTO_GET } from '../api';
import Error from '../Components/Helper/Error';
import Loading from '../Components/Helper/Loading';
import PhotoContent from './PhotoContent';
import Head from '../Components/Helper/Head';

function Photo() {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
}

export default Photo;

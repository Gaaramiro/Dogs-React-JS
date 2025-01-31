import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import Error from '.././helper/Error.jsx';
import Loading from '.././helper/Loading.jsx';
import { STATS_GET } from '../../api';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs.jsx'));

function UserStats() {
  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatisticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
}

export default UserStats;

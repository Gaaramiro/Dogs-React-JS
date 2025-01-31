import React from 'react';
import styles from './UserStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

function UserStatsGraphs({ data }) {
  const [graphs, setGraphs] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });
    setGraphs(graphData);

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
    );
  }, [data]);

  return (
    <section className={`${styles.graph} animaLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graphs}
          innerRadius={50}
          padding={{ top: 10, bottom: 20, left: 80, right: 80 }}
          style={{
            data: { fillOpacity: 0.8, stroke: '#fff', strokeWidth: '2' },
            labels: {
              fontSize: 20,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart className={styles.graphItem}>
          <VictoryBar alignment="start" data={graphs} />
        </VictoryChart>
      </div>
    </section>
  );
}

export default UserStatsGraphs;

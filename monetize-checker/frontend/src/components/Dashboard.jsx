import { Bar } from 'react-chartjs-2';

const Dashboard = ({ data }) => {
  const chartData = {
    labels: ['H1', 'H2', 'H3'],
    datasets: [{
      label: 'Количество заголовков',
      data: [data.headings.h1, data.headings.h2, data.headings.h3],
      backgroundColor: ['#36A2EB', '#FFCE56', '#4BC0C0']
    }]
  };

  return (
    <div>
      <h2>Результаты анализа</h2>
      <Bar data={chartData} />
      <div>
        <h3>Метатеги:</h3>
        <pre>{JSON.stringify(data.metaTags, null, 2)}</pre>
      </div>
      <div>
        <h3>Время загрузки:</h3>
        <p>{data.loadTime}</p>
      </div>
    </div>
  );
};

export default Dashboard;
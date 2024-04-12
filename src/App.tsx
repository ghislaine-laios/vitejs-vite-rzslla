import { useEffect, useState } from 'react';
import './App.css';
import { EChart } from '@kbox-labs/react-echarts';

function makeRandomData() {
  return [
    {
      value: Math.random(),
      name: 'A',
    },
    {
      value: Math.random(),
      name: 'B',
    },
    {
      value: Math.random(),
      name: 'C',
    },
  ];
}

function App() {
  const [data, setData] = useState(() => makeRandomData());

  useEffect(() => {
    const id = setInterval(() => setData(makeRandomData()), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <EChart
      width={400}
      height={400}
      series={[
        {
          type: 'pie',
          radius: [0, '50%'],
          data: data,
        },
      ]}
    />
  );
}

export default App;

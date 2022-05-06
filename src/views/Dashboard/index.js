import React, { useCallback, useState } from "react";
import PageHeader from '../../components/Layout/PageHeader';
import { Doughnut,Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const tankFloorDiameter = {
  labels: ['0 - 10 M', '10 - 20 M', '20 - 30 M', '30 - 40 M', '40 - 50 M'],
  datasets: [
    {
      label: '# of Votes',
      data: [7,16,9,8,1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


export const corrosionPatternType = {
  labels: ['Random Sparse', 'Concentrated perimeter', 'Concentrated Other', 'Random Widespread'],
  datasets: [
    {
      label: '# of Votes',
      data: [11,10,3,7],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  return (
    <main className='flex-1'>
      <PageHeader title={'Home'}/>
      <div className='px-4 mt-6 sm:px-6 lg:px-8'>
        <div class="grid lg:flex items-center space-y-4 lg:space-y-0">
          <div class="max-w-xl mx-auto bg-white rounded-lg border border-sky-500  shadow-cyan-500/50 drop-shadow-xl shadow-xl ..." >
            <div class="container mx-auto px-4">
              <Doughnut data={tankFloorDiameter} />
            </div>
          </div>
          <div class="max-w-xl mx-auto bg-white rounded-lg border border-sky-500  shadow-cyan-500/50 drop-shadow-xl shadow-xl ..." >
            <div class="container mx-auto px-4">
              <Pie data={corrosionPatternType} />
            </div>
          </div>
          <div class="max-w-xl mx-auto bg-white rounded-lg border border-sky-500  shadow-cyan-500/50 drop-shadow-xl shadow-xl ..." >
            <div class="container mx-auto px-4">
              <Doughnut data={corrosionPatternType} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

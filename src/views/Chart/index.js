import React, { useCallback, useState , useEffect } from "react";
import PageHeader from '../../components/Layout/PageHeader';
import { Doughnut,Pie,Line,Bar } from 'react-chartjs-2';
import DataTable from 'react-data-table-component';
import Card from '../../components/Cards/Card.js';

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Line Chart',
    },
  },
};


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


const Chart = () => {

  const [chartType,setChartType]=useState("Bar");

  const setGenderVal = (value) => {
    console.log(value);
    setChartType(value);
  }
    
  return (
    <main className='flex-1'>
      <PageHeader title={'Chart'}/>
      <div className='px-4 mt-6 sm:px-6 lg:px-8'>
        <div class="grid lg:flex items-center space-y-4 lg:space-y-0">
          <div class="container mx-auto px-4">
            <input type="radio" name="chartType" onChange={() => setGenderVal("Bar")} value="Bar" class="required:border-red-500 ..." /> Bar Chart
          </div>
          <div class="container mx-auto px-4">
            <input type="radio" name="chartType" onChange={() => setGenderVal("Pie")} value="Pie" class="required:border-red-500 ..." /> Pie Chart
          </div>
          <div class="container mx-auto px-4">
            <input type="radio" name="chartType" onChange={() => setGenderVal("Doughnut")} value="Doughnut" class="required:border-red-500 ..." /> Doughnut Chart
          </div>
          <div class="container mx-auto px-4">
            <input type="radio" name="chartType" onChange={() => setGenderVal("Line")} value="Line" class="required:border-red-500 ..." /> Line Chart
          </div>
        </div>
      </div>
      <div className='px-4 mt-6 sm:px-6 lg:px-1'>
        <div class="grid lg:flex items-center space-y-4 lg:space-y-0">
          <div class="max-w-xl mx-auto bg-white rounded-lg border border-sky-500  shadow-cyan-500/50 drop-shadow-sm shadow-sm ..." >
            <div class="container mx-auto px-4">
              {chartType == "Pie" && (
                <Pie data={tankFloorDiameter} />
              )}
              {chartType == "Doughnut" && (
                <Doughnut data={tankFloorDiameter} />
              )}
              {chartType == "Line" && (
                <Line options={options} data={tankFloorDiameter} />
              )}
              {chartType == "Bar" && (
                <Bar options={options} data={tankFloorDiameter} />
              )}
            </div>
            <div class="container mx-auto text-center	mt-6 rounded-lg border ">
              Tank Floor Diameter
            </div>
          </div>
          <div class="max-w-xl mx-auto bg-white rounded-lg border border-sky-500  shadow-cyan-500/50 drop-shadow-sm shadow-sm ..." >
            <div class="container mx-auto px-4">
              {chartType == "Pie" && (
                <Pie data={corrosionPatternType} />
              )}
              {chartType == "Doughnut" && (
                <Doughnut data={corrosionPatternType} />
              )}
              {chartType == "Line" && (
                <Line options={options} data={corrosionPatternType} />
              )}
              {chartType == "Bar" && (
                <Bar options={options} data={corrosionPatternType} />
              )}
            </div>
            <div class="container mx-auto text-center	mt-6 rounded-lg border ">
              Corrosion Pattern Type (Pie)
            </div>
          </div>
          <div class="max-w-xl mx-auto bg-white rounded-lg border border-sky-500  shadow-cyan-500/50 drop-shadow-sm shadow-sm ..." >
            <div class="container mx-auto px-4">
              {chartType == "Pie" && (
                <Pie data={tankFloorDiameter} />
              )}
              {chartType == "Doughnut" && (
                <Doughnut data={tankFloorDiameter} />
              )}
              {chartType == "Line" && (
                <Line options={options} data={tankFloorDiameter} />
              )}
              {chartType == "Bar" && (
                <Bar options={options} data={tankFloorDiameter} />
              )}
            </div>
            <div class="container mx-auto text-center	mt-6 rounded-lg border ">
              Corrosion Pattern Type (Donut)
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chart;

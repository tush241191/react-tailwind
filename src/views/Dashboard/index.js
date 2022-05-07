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

const columns = [
  {
      name: 'Tank Floor Diameter',
      selector: row => row.tankFloorDiameter,
      sortable: true,
  },
  {
      name: 'Type of inspection done',
      selector: row => row.inspection,
      sortable: true,
  },
  {
    name: 'Corrosion Pattern Type',
    selector: row => row.corrision,
    sortable: true,
  },
];

const data = [
  {
   "id": 1,
   "tankFloorDiameter": "25.15 m",
   "inspection": "MFL + UT",
   "corrision": "Concentrated perimeter"
  },
  {
   "id": 2,
   "tankFloorDiameter": "45.72 m",
   "inspection": "MFL + UT",
   "corrision": "Random Sparse"
  },
  {
   "id": 3,
   "tankFloorDiameter": "24.38 m",
   "inspection": "MFL + UT",
   "corrision": "Random Sparse"
  },
  {
   "id": 4,
   "tankFloorDiameter": "29.26 m",
   "inspection": "MFL + UT",
   "corrision": "Random Sparse"
  },
  {
   "id": 5,
   "tankFloorDiameter": "29.26 m",
   "inspection": "MFL + UT",
   "corrision": "Random Sparse"
  },
  {
   "id": 6,
   "tankFloorDiameter": "12.96 m",
   "inspection": "MFL + UT",
   "corrision": "Random Sparse"
  },
  {
   "id": 7,
   "tankFloorDiameter": "15.85 m",
   "inspection": "MFL + UT",
   "corrision": "Random Sparse"
  },
  {
   "id": 8,
   "tankFloorDiameter": "30.48 m",
   "inspection": "MFL + UT",
   "corrision": "Random Sparse"
  },
  {
   "id": 9,
   "tankFloorDiameter": "30.48 m",
   "inspection": "MFL + UT",
   "corrision": "Random Sparse"
  },
  {
   "id": 10,
   "tankFloorDiameter": "10.63m",
   "inspection": "MFL + UT",
   "corrision": "Random Sparse"
  },
  {
   "id": 11,
   "tankFloorDiameter": "7.6 m",
   "inspection": "MFL + UT",
   "corrision": "Random Sparse"
  },
  {
   "id": 12,
   "tankFloorDiameter": "33.53 m",
   "inspection": "MFL + UT",
   "corrision": "Random Sparse"
  },
  {
   "id": 13,
   "tankFloorDiameter": "20.42 m",
   "inspection": "MFL + UT",
   "corrision": "Concentrated Other"
  },
  {
   "id": 14,
   "tankFloorDiameter": "30.48m",
   "inspection": "MFL + UT",
   "corrision": "Concentrated Other"
  },
  {
   "id": 15,
   "tankFloorDiameter": "25.9 m",
   "inspection": "MFL + UT",
   "corrision": "Concentrated Other"
  },
  {
   "id": 16,
   "tankFloorDiameter": "15.84 m",
   "inspection": "MFL + UT",
   "corrision": "Concentrated Perimeter"
  },
  {
   "id": 17,
   "tankFloorDiameter": "10.67 m",
   "inspection": "MFL + UT",
   "corrision": "Concentrated Perimeter"
  },
  {
   "id": 18,
   "tankFloorDiameter": "9.11 m",
   "inspection": "MFL + UT",
   "corrision": "Concentrated Perimeter"
  },
  {
   "id": 19,
   "tankFloorDiameter": "34.12 m",
   "inspection": "MFL + UT",
   "corrision": "Concentrated Perimeter"
  },
  {
   "id": 20,
   "tankFloorDiameter": "11.9 m",
   "inspection": "MFL + UT",
   "corrision": "Concentrated Perimeter"
  },
  {
   "id": 21,
   "tankFloorDiameter": "7.6 m",
   "inspection": "MFL + UT",
   "corrision": "Concentrated Perimeter"
  },
  {
   "id": 22,
   "tankFloorDiameter": "10.95 m",
   "inspection": "MFL + UT",
   "corrision": "Concentrated Perimeter"
  },
  {
   "id": 23,
   "tankFloorDiameter": "9.14 m",
   "inspection": "MFL + UT",
   "corrision": "Concentrated Perimeter"
  },
  {
   "id": 24,
   "tankFloorDiameter": "15.86 m",
   "inspection": "MFL + UT",
   "corrision": "Concentrated Perimeter"
  },
  {
   "id": 25,
   "tankFloorDiameter": "15.86 m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 26,
   "tankFloorDiameter": "30.48 m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 27,
   "tankFloorDiameter": "18.29 m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 28,
   "tankFloorDiameter": "30.48 m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 29,
   "tankFloorDiameter": "15.2 m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 30,
   "tankFloorDiameter": "12.95 m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 31,
   "tankFloorDiameter": "21.32 m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 32,
   "tankFloorDiameter": "9.7m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 33,
   "tankFloorDiameter": "20.42 m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 34,
   "tankFloorDiameter": "37.19 m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 35,
   "tankFloorDiameter": "15.86 m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 36,
   "tankFloorDiameter": "28.95m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 37,
   "tankFloorDiameter": "9.14 m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 38,
   "tankFloorDiameter": "12.90 m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 39,
   "tankFloorDiameter": "9.71 m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 40,
   "tankFloorDiameter": "10.6 m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  },
  {
   "id": 41,
   "tankFloorDiameter": "12.9 m",
   "inspection": "MFL + UT",
   "corrision": "Random Widespread"
  }
 ]

 let lang = {
  rowsPerPageText: "Rows per page:",
  rangeSeparatorText: "of"
};

const Dashboard = () => {

  const [chartType,setChartType]=useState("Doughnut");

  const setGenderVal = (value) => {
    console.log(value);
    setChartType(value);
  }
    
  return (
    <main className='flex-1'>
      <PageHeader title={'Home'}/>
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
      <div className='px-4 mt-6 sm:px-6 lg:px-8'>
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
      <div className='px-4 mt-6 sm:px-6 lg:px-8'>
          <Card>
            <DataTable
              title="Tank Details"
              columns={columns}
              data={data}
              defaultSortField="title"
              pagination
              paginationComponentOptions={{
                rowsPerPageText: lang.rowsPerPageText,
                rangeSeparatorText: lang.rangeSeparatorText,
                noRowsPerPage: false
              }}
            />
          </Card>
        </div>
    </main>
  );
};

export default Dashboard;

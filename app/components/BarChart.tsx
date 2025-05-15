// components/BarChart.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  data: ChartData<"bar">; // Specify the type for a bar chart
}

const BarChart = ({ data }: BarChartProps) => {
  return <Bar data={data} />;
};

export default BarChart;

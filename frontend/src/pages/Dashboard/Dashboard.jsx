import BarChart from '@/components/Charts/BarChart/BarChart';
import { Box } from '@mui/material';

function Dashboard() {
  return (
    <Box width='100%' height='calc(100vh - 115px)'>
      <BarChart />
    </Box>
  );
}

export default Dashboard;

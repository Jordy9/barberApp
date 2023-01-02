import { Box } from "@mui/material";
import { useResponsive } from '../../hooks/useResponsive';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Page A",
    valor: 590,
    pv: 800,
    amt: 1400,
    cnt: 490
  },
  {
    name: "Page B",
    valor: 868,
    pv: 967,
    amt: 1506,
    cnt: 590
  },
  {
    name: "Page C",
    valor: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350
  },
  {
    name: "Page D",
    valor: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480
  },
  {
    name: "Page E",
    valor: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460
  },
  {
    name: "Page F",
    valor: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380
  }
];

export const BarChart = () => {

  const [ respWidth ] = useResponsive()

  return (
    <Box sx={{ width: '100%', height: ( respWidth < 991 ) ? '350px' : '349px', mx: 'auto' }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={250}
          data={data}
          margin={{
            top: 40,
            right: 50,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="name" scale="auto" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="valor" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="valor" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
}

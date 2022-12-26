import { Box } from "@mui/system";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface ChartProps {
  respWidth: number;
  COLORS: string[]
}

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  respWidth
}: any) => {
  const multiCondicion = (respWidth > 991) ? 1.36 : 0.5
  const radius = innerRadius + (outerRadius - innerRadius) * multiCondicion;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      { (respWidth > 991) ? `${data[index].name} ${data[index].value}` : `${data[index].value}` }
    </text>
  );
};
export const PieChartt = ({ COLORS, respWidth }: ChartProps) => {
  return (
    <Box
      sx={{ width: '100%', height: 250 }}
    >
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            labelLine={ respWidth > 991 }
            label={ ( props ) => renderCustomizedLabel({...props, respWidth})}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}

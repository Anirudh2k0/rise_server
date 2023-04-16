import {
  BarChart as ResponsiveBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    ia: 24,
    iu: 40,
    amt: 24,
  },
  {
    name: "Tuesday",
    ia: 22,
    iu: 30,
    amt: 13,
  },
  {
    name: "Wednesday",
    ia: 20,
    iu: 25,
    amt: 2290,
  },
  {
    name: "Thursday",
    ia: 27,
    iu: 39,
    amt: 2000,
  },
  {
    name: "Friday",
    ia: 4,
    iu: 8,
    amt: 2181,
  },
  {
    name: "Saturday",
    ia: 0,
    iu: 4,
    amt: 2500,
  },
  {
    name: "Sunday",
    ia: 0,
    iu: 0,
    amt: 2100,
  },
];

function BarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ResponsiveBarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="iu" fill="#8884d8" name="Images Uploaded" />
        <Bar dataKey="ia" fill="#82ca9d" name="Images Analyzed" />
      </ResponsiveBarChart>
    </ResponsiveContainer>
  );
}

export default BarChart;

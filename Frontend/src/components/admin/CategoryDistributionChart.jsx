import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'American', value: 400 },
  { name: 'Indian', value: 300 },
  { name: 'Chinese', value: 200 },
  { name: 'Italian', value: 100 },
  { name: 'Deserts And Sweets', value: 210},

  { name:'Others ', value:70 }
];

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#f472b6']; // Tailwind primary colors

const CategoryDistributionChart = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Product Category Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryDistributionChart;

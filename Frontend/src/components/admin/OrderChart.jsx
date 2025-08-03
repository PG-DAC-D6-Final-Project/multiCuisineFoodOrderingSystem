import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', orders: 240 },
  { month: 'Feb', orders: 320 },
  { month: 'Mar', orders: 280 },
  { month: 'Apr', orders: 340 },
  { month: 'May', orders: 400 },
  { month: 'Jun', orders: 370 },
  { month: 'July', orders: 250},
  { month: 'Aug', orders: null},
  { month: 'Sep', order: null},
  { month: 'Oct', order: null},
  { month: 'Nov', order: null},
  { month: 'Dec', order: null},    
];

const OrderGraph = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-11/12">
      <h2 className="text-xl font-semibold mb-4">Monthly Orders</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="orders" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderGraph;
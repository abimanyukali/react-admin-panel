import './pieChartBox.scss';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
const data = [
  { name: 'Mobile', value: 400, color: '#0089FE' },
  { name: 'Desktop', value: 300, color: '#88C49F' },
  { name: 'Laptop', value: 300, color: '#FFBB28' },
  { name: 'Tablet', value: 200, color: '#FF8042' },
];
const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: 'white', borderRadius: '5px' }}
            />
            <Pie
              data={data}
              innerRadius={'70%'}
              outerRadius={'90%'}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item, index) => (
                <Cell key={index} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item, index) => (
          <div className="option" key={index}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span className="">{item.name}</span>
            </div>
            <span className="">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;

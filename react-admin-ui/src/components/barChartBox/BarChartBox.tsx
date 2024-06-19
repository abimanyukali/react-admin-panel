import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import './barChartBox.scss';
type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};
const BarChartBox = (props: Props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: '#2a3447', borderRadius: '5px' }}
              cursor={{ display: 'none' }}
            />
            <Bar dataKey={props.dataKey} filter={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
     
      </div>
    </div>
  );
};

export default BarChartBox;

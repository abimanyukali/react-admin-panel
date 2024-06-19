import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './single.scss';

// const data = [
//   {
//     name: 'Page A',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page b',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page C',
//     uv: 7100,
//     pv: 7600,
//     amt: 590,
//   },
//   {
//     name: 'Page D',
//     uv: 7750,
//     pv: 5630,
//     amt: 6680,
//   },
//   {
//     name: 'Page E',
//     uv: 9400,
//     pv: 4770,
//     amt: 2660,
//   },
//   {
//     name: 'Page F',
//     uv: 7870,
//     pv: 4450,
//     amt: 6540,
//   },
// ];
type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: {
         name: string; 
        color: string 
    }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};
const Single = (props: Props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt="" />}
            <h1>{props.title}</h1>
            <div className="details"></div>
          </div>
          <div className="details">
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]}:</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {props.chart && (
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
               <Legend/>
               {props.chart.dataKeys.map((dataKey)=>(
                <Line type="monotone" dataKey={dataKey.name } stroke={dataKey.color}/>
               ))}
              
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
       { props.activities&& <ul>
         { props.activities.map(activity=>(

             <li key={activity.text}>
            <div>
              <p>{activity.text} </p>
              <time>{activity.time}</time> 
              
            </div>
          </li>
        ))
    }
         
        </ul>}
      </div>
    </div>
  );
};

export default Single;

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { getRushingStats } from './data_layer'

const App = () => {
  const [rushingStats, setRushingStats] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRushingStats()
      setRushingStats(response)
    };
    fetchData()
  }, [])

  console.log(rushingStats)
 
  return (
    <h1>Hi</h1>
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Date Identified</th>
    //       <th>Description of Issue</th>
    //       <th>Status</th>
    //       <th>Resolution</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {rushingStats.map(
    //       ({ description, created_time, status, resolution, id }) => {
    //         const colorClass = getColor(status);
    //         return (
    //           <tr key={id}>
    //             <td><span className={colorClass}>{created_time}</span></td>
    //             <td><span className={colorClass}>{description}</span></td>
    //             <td><span className={colorClass}>{status}</span></td>
    //             <td><span className={colorClass}>{resolution}</span></td>
    //           </tr>
    //         );
    //       }
    //     )}
    //   </tbody>
    // </table>
  );
};

ReactDOM.render(<App />, document.getElementById('app'))

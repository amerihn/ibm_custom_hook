import React from 'react'
import UseFetch from './UseFetch';
import './FetchData.css';

const FetchData = () => {
  // fetch data using hook
  const [data]=UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
  console.log(data);

  return (
    <>
     <ul className='list_data_main'>
        {/* retrieve data in front-end*/}
        {data && data.map((e) => (
          <>
          <li className='list_data'>
            <h3>{e.name}</h3>
            <p><strong>Importance: </strong>{e.importance}</p>
            <p><strong>Benefits: </strong>{e.benefits}</p>
            <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
          </li>
          </>
        ))}
     </ul>
    </>
  )
}

export default FetchData
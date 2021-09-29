import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import LineChart from './components/LineChart';

function App() {

  const [error, setError] = useState(false);
  
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  
  return (
    <div className="App">
      <div className={`error ${error ? "show" : ''}`}>
        <div className="errorContainer">
          <p>This date hasn't come yet or your end date may be before your start date!!</p>
        </div>
      </div>
      <Form setError={setError} setData={setData} setLabels={setLabels} />
      <div className='chart'>
        <LineChart data={data} labels={labels} />
      </div>
    </div>
  );
}

export default App;

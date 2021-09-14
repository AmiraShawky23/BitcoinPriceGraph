import './App.css';
import LineChart from './components/LineChart';

function App() {
  let data = ['39882.385', '39154.7917', '38198.685', '39742.4433', '40887.41', '42856.3483', '44606.61', '43804.8083', '46283.2333', '45606.6133'];
  let labels = ['2021-08-01', '2021-08-02', '2021-08-03', '2021-08-04', '2021-08-05', '2021-08-06', '2021-08-07', '2021-08-08', '2021-08-09', '2021-08-10'];
  return (
    <div className="App">
      <div className="formContainer">
        
      </div>
      <div className='chart'>
        <LineChart data={data} labels={labels} />
      </div>
    </div>
  );
}

export default App;

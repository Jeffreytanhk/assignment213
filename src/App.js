import './App.css';
import config from './config/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Test Environment Page</p>  
        <div>BaseURL: {config.baseURL}</div>
      </header>

    </div>
  );
}

export default App;

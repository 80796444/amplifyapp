import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div> 
            <a  href="sms:1-408-555-1212">New SMS Message to 1-408-555-1212</a>
            <br></br>
            <a  href="tel:1-408-555-1212">Call to 1-408-555-1212</a>
            <br></br>
            <a  href="tel,sms:1-408-555-1212">Call to 1-408-555-1212</a>
            <br></br>
            <a  href="tel:408-555-1212">Call to 1-408-555-1212</a>
          </div>
          This is a test concept
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;

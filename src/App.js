import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        This is a test concept
        <p>
          <div> 
            Send SMS to: <a  href="sms:1-408-555-1212">1-408-555-1212</a>
            <br></br>
            Call to<a  href="tel:1-408-555-1212">1-408-555-1212</a>
          </div>

          Only phone 1 <a href="1-408-555-1212">1-408-555-1212</a>
          Only phone 2 <a href="1-408-555-1212">1-408-555-1212</a>
          
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

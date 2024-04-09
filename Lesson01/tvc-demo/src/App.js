import logo from './logo.svg';
import './App.css';
import TVC_FuncComp from './components/TVC_FuncComp';
import TVC_ClassComp from './components/TVC_ClassComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Trịnh Văn Chung - ReactJS Training Demo</h2>
      </header>
      <div>
        <TVC_FuncComp />
        <TVC_FuncComp name="Trịnh Văn Chung - K22CNT2" />
      </div>
      <div>
        <TVC_ClassComp />
        <TVC_ClassComp company="Fit - NTU" hoten="Nguyễn Trần Tiến" />
      </div>
    </div>
  );
}

export default App;

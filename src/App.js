import './App.css';

function App() {
  return (
    <div className="App">
      <div className="coming__soon">
        <p>Kevin Garcia</p>
        <div>Currently under maintenice. please download resume <span style={{"font-style": "normal", "font-size": "2.5rem"}}>👷</span></div>
        <button className="download__resume">
          <a href="https://drive.google.com/file/d/1DJMhNXjavjXuJfTpfrKObC60INm2zOnU/view?usp=sharing">Download Resume</a>
        </button> 
      </div>
    </div>
  );
}

export default App;

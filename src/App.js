import './App.css';
import Home from './Routes/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

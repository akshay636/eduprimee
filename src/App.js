
import { StrictMode } from 'react';
import './App.css';
import './components/Channel';
import Home from './components/Home';
const App = () => {
  return (
    <StrictMode>
    <div className="App">
      <Home />
    </div>
    </StrictMode>
  );
}

export default App;

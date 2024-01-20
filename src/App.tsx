// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './containers/Home';
import SignoSelectionPage from './containers/SignoSelection';
import ResultPage from './containers/Result/index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signo-selection/:firstSigno" element={<SignoSelectionPage />} />
        <Route path="/result/:firstSigno/:secondSigno" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './containers/Home';
import SignSelectionPage from './containers/SignSelection';
import ResultPage from './containers/Result/index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-selection/:firstSign" element={<SignSelectionPage />} />
        <Route path="/result/:firstSign/:secondSign" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;

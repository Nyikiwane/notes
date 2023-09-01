import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
